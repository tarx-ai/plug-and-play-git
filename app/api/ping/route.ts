import { NextResponse } from "next/server";

const TIMEOUT_MS = 3500;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const path = searchParams.get("path") ?? "/health";
  if (!url) {
    return NextResponse.json(
      { ok: false, status: 400, error: "Missing url" },
      { status: 400 }
    );
  }

  let target: string;
  try {
    target = new URL(path, url).toString();
  } catch (e) {
    return NextResponse.json(
      { ok: false, status: 400, error: "Invalid url" },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(target, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(t);
    return NextResponse.json({ ok: res.ok, status: res.status, url: target });
  } catch (e: any) {
    clearTimeout(t);
    return NextResponse.json({ ok: false, status: 0, url: target, error: e?.message ?? "fetch failed" });
  }
}

