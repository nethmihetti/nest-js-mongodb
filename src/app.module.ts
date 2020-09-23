import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './schemas/company.module';
import { EmployeeModule } from './schemas/employee.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CompanyModule,
    EmployeeModule,
  ],
})
export class AppModule { }
