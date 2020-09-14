import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {CompanyModule} from "./schemas/company.module";
import {CompanyController} from "./controllers/company.controller";

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://dbUser:N1qaz2wsx@clusterddsbackend.dathe.mongodb.net/company_db_v1?retryWrites=true&w=majority`), CompanyModule],
})
export class AppModule {}
