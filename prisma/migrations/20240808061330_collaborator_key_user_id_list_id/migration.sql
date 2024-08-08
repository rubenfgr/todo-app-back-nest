/*
  Warnings:

  - The primary key for the `Collaborator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Collaborator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Collaborator" DROP CONSTRAINT "Collaborator_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("userId", "listId");
