import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from '../controllers/employee.controller';
import { EmployeeService } from '../services/employee.service';
import { Employee, EmployeeSchema } from './employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema}])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {
}
