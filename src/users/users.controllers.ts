/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { STRIPE_CLIENT } from 'src/stripe/constant';
import Stripe from 'stripe';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(STRIPE_CLIENT) private stripe: Stripe
  ) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/stripe')
  listCustomers() {
    return this.stripe.customers.list();
  }

  @Post('/stripe/create')
  createCustomers(@Body() data) {
    return this.stripe.customers.create(data);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('google')
  findByGoogle(@Body() data) {
    return this.usersService.findByGoogle(data);
  }

  @Post('user')
  findUser(@Body() data) {
    return this.usersService.findUser(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
