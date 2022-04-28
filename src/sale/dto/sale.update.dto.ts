import { IsDefined, IsString, IsUrl, Length } from 'class-validator';

export class SaleUpdateDto {
  @IsString()
  @Length(0, 255)
  @IsDefined()
  public name: string;

  @IsUrl()
  @IsDefined()
  public image: string;

  @IsString()
  @IsDefined()
  public description: string;
}
