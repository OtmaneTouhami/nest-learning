import { IsString, IsNumber, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  gender: string;
  @IsEmail()
  email: string;
  @IsNumber()
  age: number;
  @IsString()
  password: string;
}
