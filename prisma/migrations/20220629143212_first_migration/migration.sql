-- CreateTable
CREATE TABLE "Upload" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uploadURL" TEXT NOT NULL,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);
