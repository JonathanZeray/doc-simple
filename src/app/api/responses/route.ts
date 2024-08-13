import { NextRequest, NextResponse } from "next/server";
import { getResponsesByUserId } from "@/lib/mockDB";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  const responses = getResponsesByUserId(userId);

  return NextResponse.json(responses);
}
