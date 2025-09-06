import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const p = path.join(process.cwd(), "public", "dashboard-changes.json");
    const data = await readFile(p, "utf8");
    return NextResponse.json(JSON.parse(data), { status: 200 });
  } catch (e) {
    return NextResponse.json({ generatedAt: null, items: [] }, { status: 200 });
  }
}
