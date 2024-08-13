import { eq } from "drizzle-orm";
import { db } from "./db";
import { responses } from "./db/schema";

export type ResponseType = {
  userId: string;
  result: string;
};

export const addResponse = async (data: ResponseType) => {
  try {
    await db.insert(responses).values(data);
  } catch (error) {
    console.error("Failed to add response:", error);
  }
};

export const getResponseById = async (userId: string) => {
  const responseById = await db
    .select()
    .from(responses)
    .where(eq(responses.userId, userId));

  return responseById;
};
