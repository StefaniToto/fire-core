import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  public async getByUsername(email: string): Promise<User> {
    return this.prisma.getOrThrowErrorIfNotFound(
      this.prisma.user.findUnique({
        where: { email },
      })
    );
  }
}
