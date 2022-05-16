import { IsDefined, IsString, IsUrl, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SaleCreateDto {
  @IsString()
  @Length(0, 255)
  @IsDefined()
  @ApiProperty()
  public name: string;

  @IsUrl()
  @IsDefined()
  @ApiProperty()
  public image: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  public description: string;
}
