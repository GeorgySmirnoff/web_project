import {
  IsDefined,
  IsOptional,
  IsString,
  IsUrl,
  IsNumber,
  Length,
} from 'class-validator';

export class UserCreateDto {
  @IsString()
  @Length(0, 255)
  @IsOptional()
  public email: string;

  @IsUrl()
  @IsOptional()
  public password: string;

  @IsString()
  @IsOptional()
  public username: string;
}
