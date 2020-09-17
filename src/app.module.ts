import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './schemas/company.module';
import { EmployeeModule } from './schemas/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://dbUser:N1qaz2wsx@clusterddsbackend.dathe.mongodb.net/company_db_v1?retryWrites=true&w=majority`),
    CompanyModule,
    EmployeeModule,
  ],
})
export class AppModule { }
