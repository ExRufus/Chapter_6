/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `userGame` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userGame_username_key" ON "userGame"("username");
