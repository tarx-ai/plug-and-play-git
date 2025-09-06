import { getMcpClient } from "@/lib/mcp/client";

export const runtime = "nodejs";

export async function GET() {
  try {
    const tools = await getMcpClient().listTools();
    return Response.json(tools);
  } catch (error: any) {
    console.error("[tools] error", error);
    return Response.json(
      { error: error?.message || "Failed to list tools" },
      { status: 500 }
    );
  }
}
