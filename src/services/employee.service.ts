import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../schemas/employee.schema';
import { EmployeeInsertDto } from '../dto/employee-insert.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee.name) private readonly employeeModel: Model<Employee>) { }

  async createEmployee(empBody: EmployeeInsertDto): Promise<Employee> {
    const newEmp = new this.employeeModel({ first_name: empBody.first_name, second_name: empBody.second_name, birth_date: empBody.birth_date, company: null });
    return newEmp.save();
  }

  async getAllEmployees(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }

  async getEmployeeById(id: string): Promise<Employee> {
    return await this.employeeModel.find({ '_id': id})
  }

  async deleteEmployeeById(id: string): Promise<boolean> {
    return await this.employeeModel.deleteOne({ '_id': id});
  }
}
