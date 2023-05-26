/*
  Warnings:

  - Added the required column `feelsLike` to the `Weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humidity` to the `Weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pressure` to the `Weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `windDegree` to the `Weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `windMph` to the `Weather` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Weather" ADD COLUMN     "feelsLike" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "humidity" TEXT NOT NULL,
ADD COLUMN     "pressure" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "windDegree" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "windMph" DOUBLE PRECISION NOT NULL;
