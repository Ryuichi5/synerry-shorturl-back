import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Change property name to "name"

  @IsString()
  @IsNotEmpty()
  password: string;
  }
  