import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { comparePassword, encodePassword } from 'src/util/bcrypt';
import { signInResponseDto, signInUserDto } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor (
        private readonly databaseService: DatabaseService,
        private readonly jwtService: JwtService
    ) {}

    async signUp(payload: CreateUserDto) {
        // Check if user already exists
        const existingUser = await this.databaseService.user.findUnique({
            where: {
                email: payload.email
            }
        })
        if (existingUser) {
            throw new ConflictException("User already exists!");
        }
        // Hash the password
        const hashedPassword = encodePassword(payload.password);
        await this.databaseService.user.create({
            data: {
                username: payload.username,
                email: payload.email,
                password: hashedPassword
            }
        })
        return "User created successfully!";
    }

    async signIn(payload: signInUserDto): Promise<signInResponseDto> {
        // Check if user exists
        const existingUser = await this.databaseService.user.findUnique({
            where: {
                email: payload.email
            }
        })
        if (!existingUser) {
            throw new NotFoundException("User does not exist!");
        }
        // Compare the password
        const isPasswordValid = comparePassword(payload.password, existingUser.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid credentials!");
        }

        const jwtPayload = { userId: existingUser.id, username: existingUser.username };
        return {
            access_token: await this.jwtService.signAsync(jwtPayload),
        };
    }
}
