import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { Hotel, HotelSchema } from './entities/hotel.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
