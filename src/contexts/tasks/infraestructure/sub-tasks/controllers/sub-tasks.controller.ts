import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubTasksService } from '../../../application/sub-tasks/sub-tasks.service';
import { CreateSubTaskDto } from '../../../application/sub-tasks/dto/create-sub-task.dto';
import { UpdateSubTaskDto } from '../../../application/sub-tasks/dto/update-sub-task.dto';

@Controller('sub-tasks')
export class SubTasksController {
  constructor(private readonly subTasksService: SubTasksService) {}

  @Post()
  create(@Body() createSubTaskDto: CreateSubTaskDto) {
    return this.subTasksService.create(createSubTaskDto);
  }

  @Get(':taskId')
  findAllByTaskId(@Param('taskId') taskId: string) {
    return this.subTasksService.findAllByTaskId(taskId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubTaskDto: UpdateSubTaskDto) {
    return this.subTasksService.update(+id, updateSubTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subTasksService.remove(+id);
  }
}
