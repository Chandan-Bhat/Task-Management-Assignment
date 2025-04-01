import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class signInUserDto {
    @ApiProperty({ example: 'JohnDoe@smtg.com', description: 'Eamil of the user' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ example: 'JohnsPassword', description: 'Password of the user' })
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class signInResponseDto {
    @ApiProperty({ example: 'token', description: 'JWT access token' })
    @IsNotEmpty()
    @IsString()
    access_token: string;
}
