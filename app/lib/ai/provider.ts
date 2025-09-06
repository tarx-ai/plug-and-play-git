import { createOpenAI } from "@ai-sdk/openai";

const baseURL = process.env.AI_BASE_URL || undefined;
const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY;

if (!apiKey) {
  // don't crash dev; readable warning on first call
  console.warn("[AI] Missing API key. Set OPENAI_API_KEY or AI_API_KEY.");
}

export const openai = createOpenAI({
  apiKey,
  baseURL,
});

export const defaultModelName = process.env.AI_MODEL || "gpt-4o-mini";

