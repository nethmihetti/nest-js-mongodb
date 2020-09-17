import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from '../schemas/company.schema';
import { Model } from 'mongoose';
import { CompanyInsertDto } from '../dto/company-insert.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private readonly companyModel: Model<Company>) { }

  async createCompany(companyBody: CompanyInsertDto): Promise<Company> {
    const newCompany = new this.companyModel({ name: companyBody.name, location: companyBody.location});
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
}
