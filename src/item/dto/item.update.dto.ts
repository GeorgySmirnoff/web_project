import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '../../cart/cart.interface';

export class ItemUpdateDto {
  @IsString()
  @Length(0, 255)
  @IsOptional()
  public name: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  public image: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  public description: string;

  @IsNumber()
  @ApiProperty()
  public price: number;

  @IsNumber()
  @ApiProperty()
  public categoryId: number;

  @IsNumber()
  @ApiProperty()
  public cartId: number;

  @ApiProperty()
  @IsOptional()
  public carts: Cart[];
}
