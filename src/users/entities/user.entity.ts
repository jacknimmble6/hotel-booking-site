/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String, required: true})
  email: string;

  @Prop({ type: Number, required: true })
  birthMonth: number;

  @Prop({ type: Number, required: true })
  birthDay: number;

  @Prop({ type: Number, required: true })
  birthYear: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
