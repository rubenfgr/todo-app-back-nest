import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/services/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private readonly prismaService: PrismaService) {}

  findOneByEmail(email: string): Promise<User|null> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
