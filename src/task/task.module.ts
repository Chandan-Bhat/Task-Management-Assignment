import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [DatabaseModule]
})
export class TaskModule {}
