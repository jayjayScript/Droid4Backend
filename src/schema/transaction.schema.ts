import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ type: String, ref: 'user', required: true })
  email: string;

  @Prop({ required: true, enum: ['deposit', 'withdrawal'] })
  type: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'pending', enum: ['pending', 'completed', 'failed'] })
  status: string;

  @Prop()
  Coin: string; // e.g. 'USDT', 'BTC'

  @Prop()
  description: string; // optional notes

  @Prop({ type: Date })
  completedAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);