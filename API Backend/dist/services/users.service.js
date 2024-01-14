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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const hashing_1 = require("../utils/hashing");
let UsersService = exports.UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async signIn(username, password) {
        const user = await this.prisma.user.findFirst({ where: { username } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const valid = await (0, hashing_1.isValidPassword)(password, user.password);
        if (!valid) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async create(dto) {
        const password = await (0, hashing_1.hashPassword)(dto.password);
        const availabeUser = await this.prisma.user.findFirst({
            where: {
                OR: [{ username: dto.username }, { email: dto.email }],
            },
        });
        if (availabeUser) {
            throw new common_1.NotImplementedException();
        }
        else {
            return await this.prisma.user.create({ data: Object.assign(Object.assign({}, dto), { password }) });
        }
    }
    async getOneUSer(id) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    username: "admin",
                },
            });
            if (!user) {
                throw new common_1.NotFoundException();
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map