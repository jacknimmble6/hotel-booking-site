import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    try {
      return this.userModel.findOne({ _id: id }).exec();
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async findUser(data): Promise<User> {
    try {
      // eslint-disable-next-line prettier/prettier
      return this.userModel.findOne({ email: data.email, password: data.password }).exec();
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async findByGoogle(data): Promise<User> {
    try {
      const oldUser = this.userModel.findOne({ email: data.email }).exec();
      console.log(oldUser);
      return oldUser;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
