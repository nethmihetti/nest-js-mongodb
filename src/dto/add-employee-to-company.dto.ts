import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddEmployeeToCompanyDto {
  @ApiProperty({
    description: 'Company Id',
    example: '1',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly companyId: string;

  @ApiProperty({
    description: 'Employee Id',
    example: '1',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly employeeId: string;
}
