"use server";

import { generateText } from "ai";
import { openai, defaultModelName } from "@/app/lib/ai/provider";

export async function answer(prompt: string) {
  const { text } = await generateText({
    model: openai(defaultModelName),
    prompt,
  });
  return text;
}

