import { Controller, Get, Post, Body, Patch, Param, Delete, Request, ParseIntPipe, ValidationPipe, NotFoundException, ForbiddenException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { TaskEntity } from './entity/task.entity';

@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiBody({ type: CreateTaskDto})
  @ApiOperation({ summary: 'Create a task', description: 'Create a task for the logged in user' })
  @ApiResponse({ status: 201, description: 'Created task successfully!', type: TaskEntity })
  create(@Request() req, @Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    const userId: number = req.user.userId;
    return this.taskService.create(createTaskDto, userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks', description: 'Get all tasks for the logged in user' })
  @ApiResponse({ status: 200, description: 'Retrieved all task successfully!', type: [TaskEntity] })
  findAll(@Request() req) {
    const userId: number = req.user.userId;
    return this.taskService.findAll(userId);
  }

  @Patch(':id')
  @ApiQuery({ name: 'id', required: true, type: 'number', description: 'Task ID' })
  @ApiBody({ type: UpdateTaskDto })
  @ApiOperation({ summary: 'Update a task', description: 'Update a task for the logged in user' })
  @ApiResponse({ status: 200, description: 'Updated task successfully!', type: TaskEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateTaskDto: UpdateTaskDto, @Request() req) {
    const userId: number = req.user.userId;
    //ensure that the task belongs to the logged in user
    const task = await this.taskService.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    else if (task.userId !== userId) {
      throw new ForbiddenException('Task does not belong to the logged in user');
    }
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiQuery({ name: 'id', required: true, type: 'number', description: 'Task ID' })
  @ApiOperation({ summary: 'Delete a task', description: 'Delete a task for the logged in user' })
  @ApiResponse({ status: 200, description: 'Deleted task successfully!', type: TaskEntity })
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    const userId: number = req.user.userId;
    //ensure that the task belongs to the logged in user
    const task = await this.taskService.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    else if (task.userId !== userId) {
      throw new ForbiddenException('Task does not belong to the logged in user');
    }
    return this.taskService.remove(id);
  }
}
