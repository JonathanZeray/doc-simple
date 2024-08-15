import { NextRequest, NextResponse } from "next/server";
import { getResponseById } from "@/server/queries";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  try {
    const responses = await getResponseById(userId);

    return NextResponse.json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    return NextResponse.json(
      { message: "Failed to fetch responses" },
      { status: 500 }
    );
  }
}
