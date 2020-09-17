import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CompanyInsertDto {
  @ApiProperty({
    description: 'The name of the company',
    example: 'Company 1',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'The location of the company',
    example: 'Kazan',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  readonly location: string
}
