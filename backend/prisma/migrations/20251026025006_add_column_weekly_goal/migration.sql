/*
  Warnings:

  - You are about to drop the column `conclusion` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `negative` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `positive` on the `activity` table. All the data in the column will be lost.
  - Added the required column `weeklyGoal` to the `topic_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."activity" DROP COLUMN "conclusion",
DROP COLUMN "negative",
DROP COLUMN "positive",
ALTER COLUMN "google_user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."topic_user" ADD COLUMN     "weeklyGoal" INTEGER NOT NULL;
