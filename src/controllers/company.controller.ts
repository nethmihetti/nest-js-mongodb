import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {CompanyService} from "../services/company.service";
import {Company} from "../schemas/company.schema";

@Controller('/company')
export class CompanyController {

  constructor(private companyService: CompanyService) {
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return await this.companyService.getAllCompanies();
  }

  @Get('/:id')
  async findCompanyById(@Param('id') id: number):Promise<Company> {
    return await this.companyService.getCompanyById(id);
  }

  @Post()
  async postOneCompany(@Body('name') name: string): Promise<Company> {
    return await this.companyService.createCompany(name);
  }

  @Delete('/:id')
  async deleteCompanyById(@Param('id') id: number): Promise<boolean> {
    return await this.companyService.deleteCompanyBy(id);
  }

}
