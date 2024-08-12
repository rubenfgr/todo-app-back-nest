import { Module } from '@nestjs/common';
import { TaskListsService } from '../../application/task-lists/task-lists.service';
import { TaskListsController } from './controllers/task-lists.controller';

@Module({
  controllers: [TaskListsController],
  providers: [TaskListsService],
})
export class TaskListsModule {}
