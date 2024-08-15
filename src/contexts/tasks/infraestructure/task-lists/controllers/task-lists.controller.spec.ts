import { Test, TestingModule } from '@nestjs/testing';
import { TaskListsController } from './task-lists.controller';
import { TaskListsService } from '../../../application/task-lists/task-lists.service';
import { MediaModule } from '../../../../media/media.module';
import { UsersModule } from 'src/contexts/users/infraestructure/users.module';

describe('TaskListsController', () => {
  let controller: TaskListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MediaModule, UsersModule],
      controllers: [TaskListsController],
      providers: [TaskListsService],
    }).compile();

    controller = module.get<TaskListsController>(TaskListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
