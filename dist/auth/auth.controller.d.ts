import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private jwtAuthService;
    constructor(authService: AuthService, jwtAuthService: JwtService);
    login(req: any): Promise<{
        access_token: string;
    }>;
}
