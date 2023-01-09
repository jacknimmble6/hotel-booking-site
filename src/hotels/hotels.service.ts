/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import  { Model } from 'mongoose';
import { Hotel, HotelDocument } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private readonly hotelModel: Model<HotelDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const createdUser = await this.hotelModel.create(createHotelDto);
    return createdUser;
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async find(amountOfRooms: number): Promise<Hotel[]> {
    return this.hotelModel.find({ amountOfRooms: amountOfRooms });
  }

  async findOne(id: string): Promise<Hotel> {
    try {
      return this.hotelModel.findOne({ _id: id }).exec();
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true });
  }

  async delete(id: string) {
    const deletedHotel = await this.hotelModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedHotel;
  }
}
