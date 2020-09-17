import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../schemas/employee.schema';
import { EmployeeInsertDto } from '../dto/employee-insert.dto';

@Controller('/employee')
@ApiTags('employees')
export class EmployeeController {
  constructor(private empService: EmployeeService) {
  }

  @Get()
  @ApiOperation({ summary: 'Get all employee details'})
  async findAllEmployees(): Promise<Employee[]> {
    return await this.empService.getAllEmployees();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get employee details by Id'})
  async findEmployeeById(@Param('id') id: string): Promise<Employee> {
    return await this.empService.getEmployeeById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new employee'})
  async createNewEmployee(@Body() body: EmployeeInsertDto): Promise<Employee> {
    return await this.empService.createEmployee(body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete employee by Id'})
  async deleteEmployeeById(@Param('id') id: string): Promise<boolean> {
    return await this.empService.deleteEmployeeById(id);
  }
}
