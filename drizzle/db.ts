import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql);
