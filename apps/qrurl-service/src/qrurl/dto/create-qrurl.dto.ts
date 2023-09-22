// create-user.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQrurlDto {
  @IsNotEmpty()
  @IsString()
  full_url: string;

  @IsNotEmpty()
  @IsString()
  qr_image: string;

  @IsOptional()
  @IsNumber()
  user_id: number | null; // Allow it to be a number or null

}
