import { CreateProductDto, GetProductsQueryParams, UpdateProductDto } from "dto/products.dto";
import { ProductImageService } from "services/product-image.service";
import { ProductsService } from "services/products.service";
export declare class ProductsController {
    private readonly productsService;
    private readonly productImageService;
    constructor(productsService: ProductsService, productImageService: ProductImageService);
    create(dto: CreateProductDto): Promise<void>;
    getAll(query: GetProductsQueryParams): Promise<{
        items: any;
        pagination: {
            totalItem: any;
            currentPage: number;
            limit: number;
            hasItem: boolean;
        };
    }>;
    getOne(id: string): Promise<any>;
    update(id: string, dto: UpdateProductDto): Promise<[any, any]>;
    remove(id: string): Promise<any>;
}
