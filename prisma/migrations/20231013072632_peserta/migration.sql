-- CreateTable
CREATE TABLE "PesertaPendaftar" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nim" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "alasan" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PesertaPendaftar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PesertaPendaftar_nim_key" ON "PesertaPendaftar"("nim");
