import { db } from "./db";
import { responses } from "./db/schema";

type ResponseType = {
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
