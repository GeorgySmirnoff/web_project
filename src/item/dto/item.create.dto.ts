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

export class ItemCreateDto implements Prisma.ItemCreateInput {
  category: Prisma.ItemCategoryCreateNestedOneWithoutItemInput;
  Cart?: Prisma.CartCreateNestedManyWithoutItemInput;
  @IsString()
  @Length(0, 255)
  @IsOptional()
  public name: string;

  @IsUrl()
  @IsOptional()
  public image: string;

  @IsString()
  @IsOptional()
  public description: string;

  @IsNumber()
  public price: number;

  @IsNumber()
  public categoryId: number;

  @IsNumber()
  public cartId: number;

  public carts: Cart[];
}
