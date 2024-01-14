export declare class CreateProductDto {
    name: string;
    price: number;
    description: string;
    active: boolean;
    images: string[];
}
export declare class UpdateProductDto extends CreateProductDto {
}
declare enum SortBy {
    Price = "price",
    Name = "name",
    CreateAt = "createdAt"
}
declare enum SortType {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetProductsQueryParams {
    searchTerm: string;
    page: number;
    limit: number;
    sortBy: SortBy;
    sortType: SortType;
    active: boolean;
}
export {};
