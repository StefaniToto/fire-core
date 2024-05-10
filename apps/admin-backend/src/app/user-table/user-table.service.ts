import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserTableService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.getOrThrowErrorIfNotFound(
      this.prisma.user.findUnique({
        where: { id },
      })
    );
  }
}
