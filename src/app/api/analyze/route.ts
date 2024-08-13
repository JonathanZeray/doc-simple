import { analyzeImage } from "@/lib/analyzer";
import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json(
      { message: "File not present in body" },
      { status: 400, statusText: "Bad Request" }
    );
  }

  const responseStream = await analyzeImage(file);

  return new Response(responseStream);
}
