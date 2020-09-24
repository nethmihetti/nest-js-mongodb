import { ApiProperty } from '@nestjs/swagger';
import {IsArray, IsNotEmpty, IsString, ValidateNested} from 'class-validator';

export class AddEmployeesToCompanyDto {
  @ApiProperty({
    description: 'Company Id',
    example: '1',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly companyId: string;

  @ApiProperty({
    description: 'Array of Employee Ids',
    example: '[1]',
    required: true
  })
  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  readonly employeeIds: string[];
}
