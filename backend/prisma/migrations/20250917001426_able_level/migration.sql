-- CreateTable
CREATE TABLE "public"."Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Level" ADD CONSTRAINT "Level_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
