/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TypeDocument = HydratedDocument<Type>;

@Schema()
export class Type {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  price: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
