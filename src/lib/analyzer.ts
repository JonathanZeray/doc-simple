import { OpenAI } from "openai";

const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const analyzeImage = async (file: File) => {
  const encoded = await file
    .arrayBuffer()
    .then((buffer) => Buffer.from(buffer).toString("base64"));

  const completion = await openAi.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text:
              "Summarize this document with specific bulletpoints. Avoid using technical terms" +
              " using simple to understand, common language. Do not include anything else in the response.",
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${encoded}`,
            },
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 1000,
  });

  let result = "";

  for await (const chunk of completion) {
    result += chunk.choices[0]?.delta?.content || "";
  }

  return result;
};
