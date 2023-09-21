// create-user.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShorturlDto {
  @IsNotEmpty()
  @IsString()
  full_url: string;

  @IsNotEmpty()
  @IsString()
  short_url: string;

}
