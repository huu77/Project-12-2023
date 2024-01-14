import { PrismaService } from "./prisma.service";
import { CreateUserDto } from "dto/users.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    signIn(username: string, password: string): Promise<any>;
    create(dto: CreateUserDto): Promise<any>;
    getOneUSer(id: string): Promise<any>;
}
