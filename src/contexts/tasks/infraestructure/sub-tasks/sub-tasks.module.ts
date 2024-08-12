import { Module } from '@nestjs/common';
import { SubTasksService } from '../../application/sub-tasks/sub-tasks.service';
import { SubTasksController } from './controllers/sub-tasks.controller';

@Module({
  controllers: [SubTasksController],
  providers: [SubTasksService],
})
export class SubTasksModule {}
