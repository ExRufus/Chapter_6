/*
  Warnings:

  - You are about to drop the `UserGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGameBioData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGameHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserGame";

-- DropTable
DROP TABLE "UserGameBioData";

-- DropTable
DROP TABLE "UserGameHistory";

-- CreateTable
CREATE TABLE "userGame" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userGameBioData" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "userGameBioData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userGameHistory" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "userGameHistory_pkey" PRIMARY KEY ("id")
);
