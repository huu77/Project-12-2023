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
exports.ProductImageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let ProductImageService = exports.ProductImageService = class ProductImageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(images, productId) {
        if (images.length === 0)
            return;
        const data = images.map((img) => ({ url: img, productId }));
        return await this.prisma.productImage.createMany({ data });
    }
    async getAll(productId) {
        return await this.prisma.productImage.findMany({ where: { productId } });
    }
    async remove(id) {
        return await this.prisma.productImage.delete({ where: { id } });
    }
    async update(images, productId) {
        await this.prisma.productImage.deleteMany({
            where: { productId },
        });
        return await this.create(images, productId);
    }
};
exports.ProductImageService = ProductImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductImageService);
//# sourceMappingURL=product-image.service.js.map