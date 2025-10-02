/*
  Warnings:

  - You are about to drop the column `user_id` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `google_user_id` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `topic_user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."LevelEnum" AS ENUM ('beginner', 'intermediate', 'advanced');

-- DropForeignKey
ALTER TABLE "public"."Level" DROP CONSTRAINT "Level_topic_id_fkey";

-- AlterTable
ALTER TABLE "public"."activity" DROP COLUMN "user_id",
ADD COLUMN     "conclusion" TEXT,
ADD COLUMN     "google_user_id" INTEGER NOT NULL,
ADD COLUMN     "negative" TEXT,
ADD COLUMN     "positive" TEXT;

-- AlterTable
ALTER TABLE "public"."topic_user" ADD COLUMN     "level" "public"."LevelEnum" NOT NULL;

-- DropTable
DROP TABLE "public"."Level";

-- CreateTable
CREATE TABLE "public"."Community" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CommunityUser" (
    "id" SERIAL NOT NULL,
    "google_user_id" TEXT NOT NULL,
    "community_id" INTEGER NOT NULL,

    CONSTRAINT "CommunityUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "communityUserId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Notification" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "google_user_id" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Community" ADD CONSTRAINT "Community_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommunityUser" ADD CONSTRAINT "CommunityUser_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_communityUserId_fkey" FOREIGN KEY ("communityUserId") REFERENCES "public"."CommunityUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
