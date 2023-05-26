/*
  Warnings:

  - Changed the type of `humidity` on the `Weather` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Weather" DROP COLUMN "humidity",
ADD COLUMN     "humidity" DOUBLE PRECISION NOT NULL;
