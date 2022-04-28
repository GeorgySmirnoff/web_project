import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class ItemUpdateDto {
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
}
