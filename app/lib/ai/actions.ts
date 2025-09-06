"use server";

import { generateText } from "ai";
import { openai, defaultModelName } from "./provider";

export async function answer(prompt: string) {
  const { text } = await generateText({
    model: openai(defaultModelName),
    prompt,
  });
  return text;
}

