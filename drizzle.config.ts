import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env.local or .env
dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL! },
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
});
