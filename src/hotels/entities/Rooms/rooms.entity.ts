/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomsDocument = HydratedDocument<Rooms>;

@Schema()
export class Rooms {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  bookedDates: string[];

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  numberOfBedrooms: number;

  @Prop({ type: Number })
  numberOfBathrooms: number;

  @Prop({ type: Number })
  numberOfBeds: number;

  @Prop({ type: Number })
  numberOfGuests: number;

  @Prop({ type: Number })
  squareFeet: number;

  @Prop({ type: String })
  features: string[];

  @Prop({ type: String })
  images: string[];

  @Prop({ type: Number })
  roomNumber: number;
}
