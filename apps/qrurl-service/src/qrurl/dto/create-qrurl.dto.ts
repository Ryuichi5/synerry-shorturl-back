// create-user.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQrurlDto {
  @IsNotEmpty()
  @IsString()
  full_url: string;

  @IsNotEmpty()
  @IsString()
  qr_image: string;

}
