import { SigninDto } from 'dto/auth.dto';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signinUser(dto: SigninDto): Promise<{
        accessToken: any;
    }>;
}
