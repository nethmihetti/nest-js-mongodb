import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Company } from './company.schema';

@Schema()
export class Employee extends Document {
  @Prop()
  first_name: string;

  @Prop()
  lat_name: string;

  @Prop()
  birth_date: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  company: Company

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
