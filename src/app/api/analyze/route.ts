import { analyzeImage } from "@/lib/analyzer";
import { NextResponse, NextRequest } from "next/server";
import { addResponse } from "@/server/queries";

//export const runtime = "edge";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const userId = data.get("userId") as string;
  const language: string = data.get("language") as string;

  const analysisResult = await analyzeImage(file, language);

  const response = {
    userId: userId,
    result: analysisResult,
    timestamp: new Date(),
  };

  await addResponse(response);

  if (!file) {
    return NextResponse.json(
      { message: "File not present in body" },
      { status: 400, statusText: "Bad Request" }
    );
  }

  const responseStream = await analyzeImage(file, language);

  return new Response(responseStream);
}
