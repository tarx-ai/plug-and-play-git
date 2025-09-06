// scripts/gen-dashboard-changes.ts
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";

type Change = { hash: string; date: string; author: string; message: string; files: string[] };

function run(cmd: string) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
}

// last 30 commits with changed files
const raw = run(
  `git log -n 30 --date=iso-strict --pretty=format:"---%n%H%n%ad%n%an%n%s" --name-only`
);

const items: Change[] = [];
let current: Partial<Change> & { files: string[] } | null = null;

for (const line of raw.split("\n")) {
  if (line === "---") {
    if (current) items.push(current as Change);
    current = { files: [] };
    continue;
  }
  if (!current) continue;
  if (!current.hash) { current.hash = line; continue; }
  if (!current.date) { current.date = line; continue; }
  if (!current.author) { current.author = line; continue; }
  if (!current.message) { current.message = line; continue; }
  if (line) current.files.push(line);
}
if (current && current.hash) items.push(current as Change);

const out = {
  generatedAt: new Date().toISOString(),
  items: items.map(i => ({
    ...i,
    // keep only app/ and components/ by default; adjust as needed
    files: i.files.filter(f => /^(app|components|templates|lib)\//.test(f)),
  })),
};

const outPath = path.join(process.cwd(), "public", "dashboard-changes.json");
writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`✔ wrote ${out.items.length} changes → ${outPath}`);
