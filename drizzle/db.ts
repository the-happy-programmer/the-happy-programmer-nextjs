import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

export const db = drizzle(neon(process.env.DATABASE_URL!));
