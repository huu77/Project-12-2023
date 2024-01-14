import { PrismaService } from "./prisma.service";
export declare class ProductImageService {
    private prisma;
    constructor(prisma: PrismaService);
    create(images: string[], productId: number): Promise<any>;
    getAll(productId: number): Promise<any>;
    remove(id: number): Promise<any>;
    update(images: string[], productId: number): Promise<any>;
}
