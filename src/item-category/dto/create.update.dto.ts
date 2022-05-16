import { IsDefined, IsString, IsUrl, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Item } from "@prisma/client";

export class CategoryUpdateDto {
  @IsString()
  @Length(0, 255)
  @IsDefined()
  @ApiProperty()
  public name: string;

  @IsUrl()
  @IsDefined()
  @ApiProperty()
  public item: Item;


}