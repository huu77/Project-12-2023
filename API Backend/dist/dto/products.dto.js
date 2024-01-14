"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsQueryParams = exports.UpdateProductDto = exports.CreateProductDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProductDto {
    constructor() {
        this.active = true;
        this.images = [];
    }
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], CreateProductDto.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
class UpdateProductDto extends CreateProductDto {
}
exports.UpdateProductDto = UpdateProductDto;
var SortBy;
(function (SortBy) {
    SortBy["Price"] = "price";
    SortBy["Name"] = "name";
    SortBy["CreateAt"] = "createdAt";
})(SortBy || (SortBy = {}));
var SortType;
(function (SortType) {
    SortType["Asc"] = "asc";
    SortType["Desc"] = "desc";
})(SortType || (SortType = {}));
class GetProductsQueryParams {
    constructor() {
        this.searchTerm = '';
        this.page = 1;
        this.limit = 12;
        this.sortBy = SortBy.CreateAt;
        this.sortType = SortType.Asc;
        this.active = true;
    }
}
exports.GetProductsQueryParams = GetProductsQueryParams;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "searchTerm", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Max)(120),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SortBy),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "sortBy", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SortType),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "sortType", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    __metadata("design:type", Object)
], GetProductsQueryParams.prototype, "active", void 0);
//# sourceMappingURL=products.dto.js.map