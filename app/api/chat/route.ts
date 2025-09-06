import { NextRequest } from "next/server";
import { streamText } from "ai";
import { openai, defaultModelName } from "@/app/lib/ai/provider";

export const runtime = "nodejs"; // switch to 'edge' if provider supports it

export async function POST(req: NextRequest) {
  try {
    const { messages, system } = await req.json();

    const result = await streamText({
      model: openai(defaultModelName),
      system: system || "You are TARX assistant. Be concise and helpful.",
      messages,
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

