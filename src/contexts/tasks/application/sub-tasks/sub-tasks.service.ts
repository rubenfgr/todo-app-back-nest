import { Injectable } from '@nestjs/common';
import { CreateSubTaskDto } from './dto/create-sub-task.dto';
import { UpdateSubTaskDto } from './dto/update-sub-task.dto';

@Injectable()
export class SubTasksService {
  create(createSubTaskDto: CreateSubTaskDto) {
    return 'This action adds a new subTask';
  }

  findAllByTaskId(taskId: string) {
    return `This action returns all subTasks by task id: ${taskId}`;
  }

  update(id: number, updateSubTaskDto: UpdateSubTaskDto) {
    return `This action updates a #${id} subTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} subTask`;
  }
}
