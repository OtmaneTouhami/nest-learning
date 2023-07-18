import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Otmane TOUHAMI', gender: 'A Male MotherFuckers!' };
  }
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  user(id: number) {
    return { id };
  }
}
