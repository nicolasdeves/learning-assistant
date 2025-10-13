/*
  Warnings:

  - You are about to drop the column `level` on the `topic_user` table. All the data in the column will be lost.
  - Added the required column `levelId` to the `topic_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."topic_user" DROP COLUMN "level",
ADD COLUMN     "levelId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."LevelEnum";

-- CreateTable
CREATE TABLE "public"."Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."topic_user" ADD CONSTRAINT "topic_user_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Level" ADD CONSTRAINT "Level_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
