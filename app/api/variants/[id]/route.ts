import { NextResponse } from "next/server";
import { removeVariant, approveVariant } from "@/lib/variants";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await removeVariant(params.id);
  return new NextResponse(null, { status: 204 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json().catch(() => ({}));
  if (body.action === "approve") {
    const info = await approveVariant(params.id);
    return NextResponse.json({ ok: true, info });
  }
  return new NextResponse("Unsupported", { status: 400 });
}
