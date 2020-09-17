import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class EmployeeInsertDto {
  @ApiProperty({
    description: 'First name of the employee',
    example: 'Jane',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @ApiProperty({
    description: 'Second name of the employee',
    example: 'Doe',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly second_name: string;

  @ApiProperty({
    description: 'birthday of the employee',
    example: '1990-01-01',
    required: true
  })
  @IsDate()
  @IsNotEmpty()
  readonly birth_date: Date
}
