import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateTaskDto } from '../../../application/tasks/dto/create-task.dto';
import { UpdateTaskDto } from '../../../application/tasks/dto/update-task.dto';
import { TasksService } from '../../../application/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get(':taskListId')
  findAllByTaskListId(@Param('taskListId') taskListId: string) {
    return this.tasksService.findAllByTaskListId(taskListId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
