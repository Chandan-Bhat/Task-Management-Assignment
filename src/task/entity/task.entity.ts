import { ApiProperty } from "@nestjs/swagger"

export class TaskEntity {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    title: string
    
    @ApiProperty()
    description: string
    
    @ApiProperty({enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED']})
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date

    @ApiProperty()
    userId: number 
}