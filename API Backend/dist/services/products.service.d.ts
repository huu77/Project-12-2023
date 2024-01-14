import { PrismaService } from "./prisma.service";
import { CreateProductDto, GetProductsQueryParams, UpdateProductDto } from "dto/products.dto";
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(query: GetProductsQueryParams): Promise<{
        items: any;
        pagination: {
            totalItem: any;
            currentPage: number;
            limit: number;
            hasItem: boolean;
        };
    }>;
    remove(id: number): Promise<any>;
    update(id: number, dto: UpdateProductDto): Promise<any>;
}
