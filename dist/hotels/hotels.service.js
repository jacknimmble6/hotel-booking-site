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
exports.HotelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hotel_entity_1 = require("./entities/hotel.entity");
let HotelsService = class HotelsService {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async create(createHotelDto) {
        const createdUser = await this.hotelModel.create(createHotelDto);
        return createdUser;
    }
    async findAll() {
        return this.hotelModel.find().exec();
    }
    async find(amountOfRooms) {
        return this.hotelModel.find({ amountOfRooms: amountOfRooms });
    }
    async findOne(id) {
        try {
            return this.hotelModel.findOne({ _id: id }).exec();
        }
        catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    async update(id, updateHotelDto) {
        return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true });
    }
    async delete(id) {
        const deletedHotel = await this.hotelModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedHotel;
    }
};
HotelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hotel_entity_1.Hotel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HotelsService);
exports.HotelsService = HotelsService;
//# sourceMappingURL=hotels.service.js.map