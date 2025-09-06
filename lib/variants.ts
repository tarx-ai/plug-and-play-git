import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const ROOT = process.cwd();
const REG = path.join(ROOT, "data/variants.json");
const APP = path.join(ROOT, "app");

type Variant = {
  id: string;
  slug: string;      // base page folder under /app (e.g. "page" for /, "pricing", "w/alpha")
  title: string;
  status: "draft" | "approved";
  createdAt: string;
};

type Registry = { version: number; items: Variant[] };

async function readReg(): Promise<Registry> {
  try {
    const buf = await fs.readFile(REG, "utf8");
    return JSON.parse(buf);
  } catch {
    const init: Registry = { version: 1, items: [] };
    await fs.mkdir(path.dirname(REG), { recursive: true });
    await fs.writeFile(REG, JSON.stringify(init, null, 2));
    return init;
  }
}

async function writeReg(r: Registry) {
  await fs.writeFile(REG, JSON.stringify(r, null, 2));
}

export async function listVariants() {
  return (await readReg()).items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createVariant(opts: { slug: string; title?: string }) {
  const id = randomUUID().slice(0, 8);
  const v: Variant = {
    id,
    slug: opts.slug,
    title: opts.title ?? `${opts.slug} variant ${id}`,
    status: "draft",
    createdAt: new Date().toISOString(),
  };
  const reg = await readReg();
  reg.items.push(v);
  await writeReg(reg);

  // create a preview route wrapper
  const dest = path.join(APP, "_variants", opts.slug, id);
  await fs.mkdir(dest, { recursive: true });

  // This wrapper imports the base page component by path and lets you shim overrides.
  const wrapper = `export const dynamic = 'force-static';
import Base from '${resolveBaseImport(opts.slug)}';
export default function Variant() { return <div className="variant-wrap"><Base /></div>; }
`;

  await fs.writeFile(path.join(dest, "page.tsx"), wrapper, "utf8");
  return v;
}

// Simple resolver: map slug -> import path to original page component
function resolveBaseImport(slug: string) {
  // examples:
  //   "/"      -> "@/app/page"
  //   "pricing"-> "@/app/pricing/page"
  //   "w/alpha"-> "@/app/w/alpha/page"
  if (slug === "/" || slug === "home") return "@/app/page";
  return `@/app/${slug}/page`;
}

export async function removeVariant(id: string) {
  const reg = await readReg();
  const v = reg.items.find(x => x.id === id);
  if (!v) return;
  const dir = path.join(APP, "_variants", v.slug, v.id);
  await fs.rm(dir, { recursive: true, force: true });
  reg.items = reg.items.filter(x => x.id !== id);
  await writeReg(reg);
}

export async function approveVariant(id: string) {
  const reg = await readReg();
  const v = reg.items.find(x => x.id === id);
  if (!v) throw new Error("Variant not found");

  // Strategy A (local & simple): replace base page with the variant wrapper output
  // Copy /_variants/<slug>/<id>/page.tsx over the base page.tsx (backup first)
  const src = path.join(APP, "_variants", v.slug, v.id, "page.tsx");
  const dst =
    v.slug === "/" || v.slug === "home"
      ? path.join(APP, "page.tsx")
      : path.join(APP, ...v.slug.split("/"), "page.tsx");

  // backup
  const backup = dst + ".backup." + Date.now();
  try {
    await fs.copyFile(dst, backup);
  } catch {}

  await fs.copyFile(src, dst);

  v.status = "approved";
  await writeReg(reg);

  return { dst, backup };
}
