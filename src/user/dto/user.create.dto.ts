import {
  IsDefined,
  IsOptional,
  IsString,
  IsUrl,
  IsNumber,
  Length,
} from 'class-validator';
import { Prisma } from '@prisma/client';

export class UserCreateDto implements Prisma.UserWhereUniqueInput {
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
