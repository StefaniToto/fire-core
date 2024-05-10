import { Module } from '@nestjs/common';
import { UserTableController } from './user-table.controller';
import { UserTableService } from './user-table.service';

@Module({
  controllers: [UserTableController],
  providers: [UserTableService],
})
export class UserTableModule {}
