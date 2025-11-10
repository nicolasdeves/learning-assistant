/*
  Warnings:

  - Added the required column `googleUserId` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Journal" ADD COLUMN     "googleUserId" TEXT NOT NULL;
