-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "permissao" TEXT NOT NULL DEFAULT 'c'
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_nome_key" ON "usuario"("nome");
