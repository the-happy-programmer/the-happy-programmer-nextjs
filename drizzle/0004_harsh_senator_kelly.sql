ALTER TABLE "post" RENAME COLUMN "author" TO "user_id";--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_author_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
