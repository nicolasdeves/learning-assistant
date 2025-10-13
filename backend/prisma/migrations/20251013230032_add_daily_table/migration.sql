-- CreateTable
CREATE TABLE "public"."Daily" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Daily_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Daily" ADD CONSTRAINT "Daily_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Daily" ADD CONSTRAINT "Daily_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
