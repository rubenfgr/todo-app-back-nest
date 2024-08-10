import { Module } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { PrismaService } from '../../shared/services/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
