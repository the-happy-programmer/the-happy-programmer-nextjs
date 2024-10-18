CREATE TABLE IF NOT EXISTS "post" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"tags" json NOT NULL,
	"user_id" uuid NOT NULL,
	"avatar" text NOT NULL,
	"categories" json NOT NULL,
	"hero_image" text NOT NULL,
	"pugDate" date,
	"modifDate" date,
	"post_content" text NOT NULL,
	"new_post" boolean
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
