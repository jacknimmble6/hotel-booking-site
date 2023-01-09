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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        try {
            return this.userModel.findOne({ _id: id }).exec();
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    async findUser(data) {
        try {
            return this.userModel.findOne({ email: data.email, password: data.password }).exec();
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    async findByGoogle(data) {
        try {
            const oldUser = this.userModel.findOne({ email: data.email }).exec();
            console.log(oldUser);
            return oldUser;
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    async update(id, updateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }
    async delete(id) {
        const deletedUser = await this.userModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedUser;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map