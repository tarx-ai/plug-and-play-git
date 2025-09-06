import { NextRequest } from "next/server";
import { getMcpClient } from "@/lib/mcp/client";

export const runtime = "nodejs";

export async function POST(req: NextRequest, { params }: { params: { tool: string } }) {
  try {
    const name = params.tool;                 // e.g. "supabase.sql"
    const payload = await req.json().catch(() => ({}));
    const mcp = getMcpClient();

    const result = await mcp.callTool(name, payload);
    return new Response(JSON.stringify(result), {
      status: "error" in result ? 400 : 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    console.error("[tools] error", error);
    return new Response(
      JSON.stringify({ 
        type: "error", 
        message: error?.message || "Tool execution failed" 
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
