import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    @ApiProperty({ example: 'JohnDoe', description: 'Username of the user' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'JohnDoe@smtg.com', description: 'Eamil of the user' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'JhonsPassword', description: 'Eamil of the user' })
    @IsNotEmpty()
    password: string;
}