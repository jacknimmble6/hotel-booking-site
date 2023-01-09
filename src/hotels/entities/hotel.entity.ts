import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Rooms } from './Rooms/rooms.entity';
import { Type } from './type.entity';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  country: string;

  @Prop({ type: String, required: true })
  state: string;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: String, required: true })
  latitude: string;

  @Prop({ type: String, required: true })
  longitude: string;

  @Prop([String])
  generalImages: string[];

  @Prop({ type: String, required: true })
  OverviewDescription: string;

  @Prop({ type: String, required: true })
  NeighborhoodDescription: string;

  @Prop({ type: String, required: true })
  Address: string;

  @Prop({ type: String, required: true })
  neighborhood: string;

  @Prop({ type: String, required: true })
  PublicTransit: string;

  @Prop({ type: String, required: true })
  Downtown: string;

  @Prop([String])
  Parking: string[];

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  amountOfRooms: number;

  @Prop([String])
  amenities: string[];

  @Prop()
  rooms: Rooms[];

  @Prop()
  typeOfRooms: Type[];

  @Prop({ type: String, required: true })
  checkInTime: string;

  @Prop({ type: String, required: true })
  checkOutTime: string;

  @Prop({ type: String, required: true })
  flexibleCancellation: string;

  @Prop([String])
  checkInPolicy: string[];

  @Prop([String])
  houseRules: string[];

  @Prop([String])
  notes: string[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
