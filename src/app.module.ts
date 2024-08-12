import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './contexts/users/infraestructure/users.module';
import { AuthModule } from './contexts/auth/infraestructure/auth.module';
import { TasksModule } from './contexts/tasks/infraestructure/tasks/tasks.module';
import { TaskListsModule } from './contexts/tasks/infraestructure/task-lists/task-lists.module';
import { SubTasksModule } from './contexts/tasks/infraestructure/sub-tasks/sub-tasks.module';

@Module({
  imports: [UsersModule, AuthModule, TasksModule, TaskListsModule, SubTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
