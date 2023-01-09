/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: String })
  userId: string;

  @Prop({ type: String })
  total: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  roomName: string;

  @Prop({ type: String })
  roomNumber: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  checkIn: string;

  @Prop({ type: String })
  checkOut: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
