import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public async login(userDto: User) {
    const user = await this.usersService.getByUsername(userDto.email);
    if (userDto.password && user.password) {
      const matched = await bcrypt.compare(userDto.password, user.password);
    }
  }
}
