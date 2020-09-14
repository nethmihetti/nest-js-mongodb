import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Company} from "../schemas/company.schema";
import {Model} from "mongoose";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private readonly companyModel: Model<Company>) {}

  async createCompany(name: string): Promise<Company> {
    const newCompany = new this.companyModel({name});
    return newCompany.save();
  }

  async getAllCompanies(): Promise<Company[]> {
    return await this.companyModel.find();
  }

  async getCompanyById(id: number): Promise<Company> {
    return await this.companyModel.find({'_id': id})
  }

  async deleteCompanyBy(id: number): Promise<boolean> {
    //const comp = await this.companyModel.find({'_id': id});
    return await this.companyModel.deleteOne({'_id': id});

  }
}
