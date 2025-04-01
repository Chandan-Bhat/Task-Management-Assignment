import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {
  constructor(private readonly db: DatabaseService) {}

  async create(createTaskDto: CreateTaskDto, userId: number) {
    return this.db.task.create({data: {...createTaskDto, userId}})
  }

  async findAll(userId: number) {
    return this.db.task.findMany({ where: { userId } })
  }

  async findOne(id: number) {
    return this.db.task.findUnique({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.db.task.update({
      where: { id },
      data: { ...updateTaskDto }
    });
  }

  async remove(id: number) {
    return this.db.task.delete({ where: { id } });
  }
}
