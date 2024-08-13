"use server";

import {
  ResponseType,
  addResponse,
  getResponseById,
} from "../../src/server/queries";

export async function postResponseToDB(data: ResponseType) {
  try {
    await addResponse(data);
  } catch (error) {
    console.error("Error posting response to DB:", error);
  }
}

// Function to get all responses for a specific user
export async function getAllResponses(userId: string) {
  try {
    return await getResponseById(userId);
  } catch (error) {
    console.error("Error fetching all user's responses:", error);
    return [];
  }
}
