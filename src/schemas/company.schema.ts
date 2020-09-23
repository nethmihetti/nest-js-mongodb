import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Employee } from './employee.schema';

@Schema()
export class Company extends Document {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  createdAt: Date;

  @Prop()
  employees: Employee[];

}

export const CompanySchema = SchemaFactory.createForClass(Company);
