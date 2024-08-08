-- DropForeignKey
ALTER TABLE "TaskList" DROP CONSTRAINT "TaskList_mediaImageId_fkey";

-- AlterTable
ALTER TABLE "TaskList" ALTER COLUMN "mediaImageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TaskList" ADD CONSTRAINT "TaskList_mediaImageId_fkey" FOREIGN KEY ("mediaImageId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
