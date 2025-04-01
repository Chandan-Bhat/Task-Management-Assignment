import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiPropertyOptional({ example: "Get Milk & Sugar", description: 'Update Title of the task' })
    @IsString()
    @IsNotEmpty()
    title?: string;
    
    @ApiPropertyOptional({ example: "Get milk & sugar from the store", description: 'Update Description of the task' })
    @IsString()
    @IsOptional()
    description?: string;
    
    @ApiPropertyOptional({
        description: 'Update Status of the task',
        enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
        default: 'PENDING'
    })
    @IsString()
    @IsOptional()
    @IsEnum(['PENDING', 'IN_PROGRESS', 'COMPLETED'], {
        message: 'Status must be one of the following: PENDING, IN_PROGRESS, COMPLETED',
    })
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}
