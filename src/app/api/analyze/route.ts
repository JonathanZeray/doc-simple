import { analyzeImage } from "@/lib/analyzer";
import { NextResponse, NextRequest } from "next/server";
import { insertResponse } from "@/lib/mockDB";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const userId = data.get("userId") as string;

  const analysisResult = await analyzeImage(file);

  const response = {
    userId: userId,
    result: analysisResult,
    timestamp: new Date(),
  };

  insertResponse(response);

  if (!file) {
    return NextResponse.json(
      { message: "File not present in body" },
      { status: 400, statusText: "Bad Request" }
    );
  }

  const responseStream = await analyzeImage(file);

  return new Response(responseStream);
}
