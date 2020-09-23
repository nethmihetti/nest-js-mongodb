import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../schemas/company.schema';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompanyInsertDto } from '../dto/company-insert.dto';
import { AddEmployeeToCompanyDto } from '../dto/add-employee-to-company.dto';

@Controller('/company')
@ApiTags('companies')
export class CompanyController {

  constructor(private companyService: CompanyService) {
  }

  @Get()
  @ApiOperation({ summary: 'Get all company details'})
  async findAll(): Promise<Company[]> {
    return await this.companyService.getAllCompanies();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get company details by Id'})
  async findCompanyById(@Param('id') id: string): Promise<Company> {
    return await this.companyService.getCompanyById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new company'})
  async postOneCompany(@Body() body: CompanyInsertDto): Promise<Company> {
    return await this.companyService.createCompany(body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete company by Id'})
  async deleteCompanyById(@Param('id') id: string): Promise<boolean> {
    return await this.companyService.deleteCompanyBy(id);
  }

  @Patch()
  @ApiOperation({ summary: 'Add employee to the company'})
  async addEmployeeToCompany(@Body() body: AddEmployeeToCompanyDto): Promise<Company> {
    return await this.companyService.updateCompanyWithEmployee(body);
  }


}
