/*
  Warnings:

  - You are about to drop the column `address` on the `UserGameBioData` table. All the data in the column will be lost.
  - Added the required column `city` to the `UserGameBioData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGameBioData" DROP COLUMN "address",
ADD COLUMN     "city" TEXT NOT NULL;
