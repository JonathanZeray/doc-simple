import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL! },
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
});
