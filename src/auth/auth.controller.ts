import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { signInResponseDto, signInUserDto } from './dto/signin-user.dto';
import { Public } from './auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Public()
    @ApiOperation({ summary: 'Sign up', description: 'Create a new user' })
    @ApiResponse({ status: 200, description: 'User created successfully' })
    @Post("/sign-up")
    signUp(@Body(ValidationPipe) payload: CreateUserDto): Promise<string> {
        return this.authService.signUp(payload);
    }

    @Public()
    @ApiOperation({ summary: 'Sign in', description: 'Sign in an existing user' })
    @ApiResponse({ status: 200, description: 'User signed in successfully', type: signInResponseDto })
    @Post("/sign-in")
    signIn(@Body(ValidationPipe) payload: signInUserDto): Promise<signInResponseDto> {
        return this.authService.signIn(payload);
    }
}
