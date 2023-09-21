// create-user.dto.ts
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateShorturlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  full_url: string;
}
