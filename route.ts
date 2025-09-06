import { NextRequest } from "next/server";
import { streamText, Tool } from "ai";
import { openai, defaultModelName } from "@/app/lib/ai/provider";
import { z } from "zod";
import { getMcpClient } from "@/lib/mcp/client";

export const runtime = "nodejs"; // switch to 'edge' if provider supports it

function buildTools(): Record<string, Tool<any, any>> {
  const mcp = getMcpClient();

  // Create a small set of named tools the model can call.
  // You can expand this dynamically with mcp.listTools() if you prefer.
  return {
    "supabase.schema": {
      description: "Return the database schema (tables, columns).",
      parameters: z.object({}),
      execute: async () => {
        const res = await mcp.callTool("supabase.schema");
        return res; // returned object is streamed back to the model + client
      },
    },
    "supabase.sql": {
      description: "Run a SQL query against the database.",
      parameters: z.object({ sql: z.string().min(1) }),
      execute: async ({ sql }) => {
        const res = await mcp.callTool("supabase.sql", { sql });
        return res;
      },
    },
    "apollo.introspect": {
      description: "GraphQL schema introspection via Apollo.",
      parameters: z.object({}),
      execute: async () => {
        const res = await mcp.callTool("apollo.introspect");
        return res;
      },
    },
    "github.repos": {
      description: "List GitHub repositories for the organization.",
      parameters: z.object({}),
      execute: async () => {
        const res = await mcp.callTool("github.repos");
        return res;
      },
    },
    "github.issues": {
      description: "Get GitHub issues for a repository.",
      parameters: z.object({ 
        repo: z.string().optional(),
        state: z.enum(["open", "closed", "all"]).optional()
      }),
      execute: async ({ repo, state }) => {
        const res = await mcp.callTool("github.issues", { repo, state });
        return res;
      },
    },
    "file.read": {
      description: "Read file contents from the project.",
      parameters: z.object({ path: z.string().min(1) }),
      execute: async ({ path }) => {
        const res = await mcp.callTool("file.read", { path });
        return res;
      },
    },
    "file.list": {
      description: "List directory contents.",
      parameters: z.object({ path: z.string().optional() }),
      execute: async ({ path }) => {
        const res = await mcp.callTool("file.list", { path });
        return res;
      },
    },
  };
}

export async function POST(req: NextRequest) {
  try {
    const { messages, system } = await req.json();
    const tools = buildTools();

    const result = await streamText({
      model: openai(defaultModelName),
      system: system || `You are TARX assistant. Be concise and helpful.
When you call tools, include concise textual summaries.
If a tool returns 'table' or 'json', keep the chat reply short; the UI will render the data in a secondary panel.`,
      messages,
      tools, // <-- MCP tools available to the model
    });

    return result.toAIStreamResponse();
  } catch (err: any) {
    console.error("[chat] error", err);
    return new Response(
      JSON.stringify({ error: err?.message || "AI error" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}

