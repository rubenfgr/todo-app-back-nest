import { Module } from '@nestjs/common';
import { TaskListsService } from '../../application/task-lists/task-lists.service';
import { TaskListsController } from './controllers/task-lists.controller';
import { MediaModule } from 'src/contexts/media/media.module';

@Module({
  imports: [MediaModule],
  controllers: [TaskListsController],
  providers: [TaskListsService],
})
export class TaskListsModule {}
