import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async login(userDto: User) {
    const user = await this.usersService.getByUsername(userDto.email);
    console.log('user endpint clicked', user);
    if (userDto.password && user.password) {
      const matched = await bcrypt.compare(userDto.password, user.password);

      if (!matched) {
        throw new HttpException('Invalid username or password ', 401);
      }
      const username = userDto.email;

      const token = this.jwtService.sign({ username });
      return token;
    }
  }

  public async signup(userDto: User) {
    const user = await this.usersService.getByUsername(userDto.email);
    console.log('user endpint clicked', user, userDto);
    if (userDto.password && user.password) {
      const matched = await bcrypt.compare(userDto.password, user.password);

      if (!matched) {
        throw new HttpException('Invalid username or password ', 401);
      }
      const username = userDto.email;

      const token = this.jwtService.sign({ username });
      return token;
    }
  }

  public async validate(_user: any) {
    try {
      const user = await this.usersService.getByUsername(_user.username);
      return user;
    } catch (err: any) {
      throw new HttpException(err, 400);
    }
  }
}
