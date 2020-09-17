import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop()
  first_name: string;

  @Prop()
  lat_name: string;

  @Prop()
  birth_date: Date;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
