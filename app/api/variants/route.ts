import { NextResponse } from "next/server";
import { listVariants, createVariant } from "@/lib/variants";

export async function GET() {
  return NextResponse.json(await listVariants());
}

export async function POST(req: Request) {
  const { slug, title } = await req.json();
  if (!slug) return new NextResponse("Missing slug", { status: 400 });
  const v = await createVariant({ slug, title });
  return NextResponse.json(v, { status: 201 });
}
