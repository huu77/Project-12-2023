import { PrismaService } from 'services/prisma.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly prismaService;
    constructor(appService: AppService, prismaService: PrismaService);
    getHello(): string;
    seeds(): Promise<void>;
}
