/*
  Warnings:

  - A unique constraint covering the columns `[userGameId]` on the table `UserGameBioData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userGameId` to the `UserGameBioData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGameBioData" ADD COLUMN     "userGameId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserGameBioData_userGameId_key" ON "UserGameBioData"("userGameId");

-- AddForeignKey
ALTER TABLE "UserGameBioData" ADD CONSTRAINT "UserGameBioData_userGameId_fkey" FOREIGN KEY ("userGameId") REFERENCES "UserGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
