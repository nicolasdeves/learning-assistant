/*
  Warnings:

  - You are about to drop the `activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `alternative` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercise_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `topic_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Community" DROP CONSTRAINT "Community_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Daily" DROP CONSTRAINT "Daily_topicId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Level" DROP CONSTRAINT "Level_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Notification" DROP CONSTRAINT "Notification_topicId_fkey";

-- DropForeignKey
ALTER TABLE "public"."activity" DROP CONSTRAINT "activity_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."alternative" DROP CONSTRAINT "alternative_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."answer" DROP CONSTRAINT "answer_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."exercise" DROP CONSTRAINT "exercise_activity_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."exercise" DROP CONSTRAINT "exercise_exercise_type_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."topic_user" DROP CONSTRAINT "topic_user_levelId_fkey";

-- DropForeignKey
ALTER TABLE "public"."topic_user" DROP CONSTRAINT "topic_user_topic_id_fkey";

-- DropTable
DROP TABLE "public"."activity";

-- DropTable
DROP TABLE "public"."alternative";

-- DropTable
DROP TABLE "public"."answer";

-- DropTable
DROP TABLE "public"."exercise";

-- DropTable
DROP TABLE "public"."exercise_type";

-- DropTable
DROP TABLE "public"."topic";

-- DropTable
DROP TABLE "public"."topic_user";

-- CreateTable
CREATE TABLE "public"."Topic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TopicUser" (
    "id" SERIAL NOT NULL,
    "google_user_id" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "weeklyGoal" INTEGER NOT NULL,

    CONSTRAINT "TopicUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Exercise" (
    "id" SERIAL NOT NULL,
    "exercise_type_id" INTEGER NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "finished_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExerciseType" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Alternative" (
    "id" SERIAL NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alternative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Answer" (
    "id" SERIAL NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ActivityUser" (
    "id" SERIAL NOT NULL,
    "googleUserId" TEXT NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "ActivityUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "googleUserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TopicUser" ADD CONSTRAINT "TopicUser_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TopicUser" ADD CONSTRAINT "TopicUser_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Level" ADD CONSTRAINT "Level_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exercise" ADD CONSTRAINT "Exercise_exercise_type_id_fkey" FOREIGN KEY ("exercise_type_id") REFERENCES "public"."ExerciseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exercise" ADD CONSTRAINT "Exercise_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "public"."Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alternative" ADD CONSTRAINT "Alternative_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Community" ADD CONSTRAINT "Community_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Daily" ADD CONSTRAINT "Daily_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "public"."Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ActivityUser" ADD CONSTRAINT "ActivityUser_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "public"."Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
