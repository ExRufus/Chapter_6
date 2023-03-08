/*
  Warnings:

  - You are about to drop the `userGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userGameBioData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userGameHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "userGame";

-- DropTable
DROP TABLE "userGameBioData";

-- DropTable
DROP TABLE "userGameHistory";

-- CreateTable
CREATE TABLE "UserGame" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameBioData" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "UserGameBioData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameHistory" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "UserGameHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserGame_username_key" ON "UserGame"("username");
