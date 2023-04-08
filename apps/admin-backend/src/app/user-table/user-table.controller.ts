import { Controller, Get } from '@nestjs/common';
import { UserTableService } from './user-table.service';
import { User } from '@prisma/client';

@Controller('user-table')
export class UserTableController {
  constructor(private readonly userTableService: UserTableService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userTableService.findAll();
  }
}
