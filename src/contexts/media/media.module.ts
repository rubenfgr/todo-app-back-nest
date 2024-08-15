import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MediaIdExistsValidator } from './validators/media-id-exists.validator';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService, MediaIdExistsValidator, PrismaService],
  exports: [MediaIdExistsValidator],
})
export class MediaModule {}
