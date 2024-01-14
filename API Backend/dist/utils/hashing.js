"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const saltOrRounds = 10;
const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltOrRounds);
};
exports.hashPassword = hashPassword;
const isValidPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=hashing.js.map