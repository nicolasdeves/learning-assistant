/*
  Warnings:

  - You are about to drop the `Daily` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Daily" DROP CONSTRAINT "Daily_levelId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Daily" DROP CONSTRAINT "Daily_topicId_fkey";

-- DropTable
DROP TABLE "public"."Daily";

-- CreateTable
CREATE TABLE "public"."Journal" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Journal" ADD CONSTRAINT "Journal_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Journal" ADD CONSTRAINT "Journal_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
