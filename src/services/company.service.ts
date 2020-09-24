import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from '../schemas/company.schema';
import { Model } from 'mongoose';
import { CompanyInsertDto } from '../dto/company-insert.dto';
import { AddEmployeesToCompanyDto } from '../dto/add-employees-to-company.dto';
import { Employee } from '../schemas/employee.schema';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private readonly companyModel: Model<Company>,
              @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,
              ) { }

  async createCompany(companyBody: CompanyInsertDto): Promise<Company> {
    const newCompany = new this.companyModel({ name: companyBody.name, location: companyBody.location, employees: []});
    return newCompany.save();
  }

  async getAllCompanies(): Promise<Company[]> {
    return await this.companyModel.find();
  }

  async getCompanyById(id: string): Promise<Company> {
    return await this.companyModel.find({ '_id': id})
  }

  async deleteCompanyBy(id: string): Promise<boolean> {
    return await this.companyModel.deleteOne({ '_id': id});
  }

  async updateCompanyWithEmployee(body: AddEmployeesToCompanyDto): Promise<Company> {
    const comp = await this.companyModel.find({ '_id': body.companyId});
    const empAry = [];
    for (const empId of body.employeeIds) {
      const emp = await this.employeeModel.find({ '_id': empId});
      empAry.push(emp)
    }

    const company = comp[0];

    if (company && empAry.length === body.employeeIds.length) {
      for(const employeeSubAry of empAry) {
        const employee = employeeSubAry[0];
        if (company.employees) {
          company.employees.indexOf(employee._id) === -1 ? company.employees.push(employee._id) : null;
        } else {
          company.employees = [employee._id];
        }

        employee.company = company;

        await this.employeeModel.updateOne({'_id': employee._id}, employee);
      }
      return await this.companyModel.updateOne({'_id': body.companyId}, company);
    }

    return null;
  }
}
