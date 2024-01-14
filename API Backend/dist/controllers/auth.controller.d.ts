import { SigninDto } from 'dto/auth.dto';
import { AuthService } from 'services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signinUser(dto: SigninDto): Promise<{
        accessToken: any;
    }>;
}
