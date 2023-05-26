-- CreateTable
CREATE TABLE "Weather" (
    "id" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "hourOfLecture" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);
