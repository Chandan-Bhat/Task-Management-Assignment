import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty({ example: "Get milk", description: 'Title of the task' })
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @ApiPropertyOptional({ example: "Get milk from the store", description: 'Description of the task' })
    @IsString()
    @IsOptional()
    description?: string;
    
    @ApiPropertyOptional({
        description: 'Status of the task',
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
