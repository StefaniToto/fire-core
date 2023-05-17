import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async userLogin(@Res() res: Response, @Body() userDto: User) {
    console.log('assssss', userDto);
    try {
      const token = await this.authService.login(userDto);
      return res.status(200).json({ access_token: token });
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  @Post('signup')
  async userSignup(@Res() res: Response, @Body() userDto: User) {
    console.log('assssss', userDto);
    try {
      const token = await this.authService.signup(userDto);
      return res.status(200).json({ access_token: token });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
