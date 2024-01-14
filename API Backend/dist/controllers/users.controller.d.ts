import { CreateUserDto } from "dto/users.dto";
import { UsersService } from "services/users.service";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(dto: CreateUserDto): Promise<void>;
    getOneUSer(id: string): Promise<any>;
}
