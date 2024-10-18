ALTER TABLE "post" RENAME COLUMN "user_id" TO "author";--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
