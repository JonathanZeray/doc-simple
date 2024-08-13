import { sql } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const responses = pgTable("responses", {
  id: serial("id").primaryKey(),
  userId: varchar("userId").notNull(),
  result: text("result").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
