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
