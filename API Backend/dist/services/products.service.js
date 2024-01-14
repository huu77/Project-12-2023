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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return await this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                description: dto.description,
                active: true,
            },
        });
    }
    async getOne(id) {
        const data = await this.prisma.product.findFirst({
            where: { id },
            include: {
                ProductImage: {
                    select: {
                        id: true,
                        url: true,
                    },
                },
            },
        });
        if (!data) {
            throw new common_1.NotFoundException();
        }
        return data;
    }
    async getAll(query) {
        const { searchTerm, sortBy, sortType, page, limit, active } = query;
        const where = {
            AND: [{ name: { contains: searchTerm } }, { active }],
        };
        const [totalItem, products] = await Promise.all([
            this.prisma.product.count({ where }),
            this.prisma.product.findMany({
                where,
                orderBy: [
                    {
                        [sortBy]: sortType,
                    },
                ],
                take: limit,
                skip: (page - 1) * limit,
                include: {
                    ProductImage: {
                        select: {
                            id: true,
                            url: true,
                        },
                    },
                },
            }),
        ]);
        return {
            items: products,
            pagination: {
                totalItem,
                currentPage: page,
                limit,
                hasItem: (page - 1) * limit < totalItem,
            },
        };
    }
    async remove(id) {
        return await this.prisma.product.update({
            where: { id },
            data: { active: false },
        });
    }
    async update(id, dto) {
        return await this.prisma.product.update({
            where: { id },
            data: {
                name: dto.name,
                price: dto.price,
                description: dto.description,
                active: dto.active,
            },
        });
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map