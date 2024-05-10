import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserTableService } from './user-table/user-table.service';
import { UserTableModule } from './user-table/user-table.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AuthModule, UserTableModule],
  controllers: [AppController],
  providers: [AppService, UserTableService],
})
export class AppModule {}
