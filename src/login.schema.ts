import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Login extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
