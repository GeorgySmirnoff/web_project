import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { Cart } from '../../cart/cart.interface';
import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ItemCreateDto implements Prisma.ItemCreateInput {
  category: Prisma.ItemCategoryCreateNestedOneWithoutItemInput;
  Cart?: Prisma.CartCreateNestedManyWithoutItemInput;
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
  @IsOptional()
  public cartId: number | null;

  @ApiProperty()
  @IsOptional()
  public carts: Cart[] | null;
}
