import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = await this.orderModel.create(createOrderDto);
    return createdOrder;
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findById(id: string) {
    try {
      return this.orderModel.find({ userId: id }).exec();
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async remove(id: string) {
    const deletedHotel = await this.orderModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedHotel;
  }
}
