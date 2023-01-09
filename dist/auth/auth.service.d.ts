import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    generateJwt(payload: any): string;
    signIn(user: any): Promise<User>;
    registerUser(user: CreateUserDto): Promise<User>;
    login(email: any): Promise<{
        access_token: string;
    }>;
}
