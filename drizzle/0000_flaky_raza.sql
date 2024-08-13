CREATE TABLE IF NOT EXISTS "responses" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar NOT NULL,
	"result" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
