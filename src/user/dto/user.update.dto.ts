import {
  IsDefined,
  IsOptional,
  IsString,
  IsUrl,
  IsNumber,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @Length(0, 255)
  @IsOptional()
  @ApiProperty()
  public email: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  public password: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  public username: string;
}
