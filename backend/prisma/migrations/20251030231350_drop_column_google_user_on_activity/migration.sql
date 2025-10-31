/*
  Warnings:

  - You are about to drop the column `google_user_id` on the `activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."activity" DROP COLUMN "google_user_id";
