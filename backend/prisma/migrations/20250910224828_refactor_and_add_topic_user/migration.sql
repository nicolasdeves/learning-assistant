-- CreateTable
CREATE TABLE "public"."topic_user" (
    "id" SERIAL NOT NULL,
    "google_user_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,

    CONSTRAINT "topic_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."topic_user" ADD CONSTRAINT "topic_user_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
