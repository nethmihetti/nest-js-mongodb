import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop()
  name: string;

  @Prop()
  location: string

}

export const CompanySchema = SchemaFactory.createForClass(Company);
