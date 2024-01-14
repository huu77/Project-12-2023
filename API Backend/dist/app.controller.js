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
exports.AppController = void 0;
const prisma_service_1 = require("./services/prisma.service");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const hashing_1 = require("./utils/hashing");
const faker_1 = require("@faker-js/faker");
const createArr = (lenght) => Array.from(Array(lenght).keys());
let AppController = exports.AppController = class AppController {
    constructor(appService, prismaService) {
        this.appService = appService;
        this.prismaService = prismaService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async seeds() {
        await this.prismaService.user.create({
            data: {
                username: 'admin',
                password: await (0, hashing_1.hashPassword)('123456'),
                email: 'admin123@gmail.com',
                fullname: 'alex nguyen',
            },
        });
        const products = createArr(400).map(() => ({
            name: faker_1.faker.commerce.productName(),
            price: faker_1.faker.datatype.number({ min: 10, max: 2000 }),
            description: faker_1.faker.commerce.productDescription(),
            active: faker_1.faker.datatype.boolean(),
        }));
        await this.prismaService.product.createMany({ data: products });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('seeds'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "seeds", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        prisma_service_1.PrismaService])
], AppController);
//# sourceMappingURL=app.controller.js.map