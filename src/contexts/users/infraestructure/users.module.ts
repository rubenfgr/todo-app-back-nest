import { Module } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { PrismaService } from '../../shared/services/prisma.service';
import { UserIdExistsValidator } from './validators/user-id-exists.validator';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService, UserIdExistsValidator, PrismaService],
  exports: [UsersService, UserIdExistsValidator],
})
export class UsersModule {}
