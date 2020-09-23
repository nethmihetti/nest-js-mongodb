import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './company.schema';
import { CompanyController } from '../controllers/company.controller';
import { CompanyService } from '../services/company.service';
import { Employee, EmployeeSchema } from './employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema}]),
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema}])
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {
}
