/*
  Warnings:

  - Added the required column `presigned_job_id` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "presigned_job_id" TEXT NOT NULL;
