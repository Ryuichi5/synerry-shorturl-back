// create-user.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateShorturlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  full_url: string;

  @IsOptional()
  @IsNumber()
  user_id: number | null; // Allow it to be a number or null
}
