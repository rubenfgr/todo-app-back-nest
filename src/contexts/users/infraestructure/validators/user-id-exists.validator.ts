import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../../../shared/services/prisma.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'UserIdExistsValidator', async: true })
@Injectable()
export class UserIdExistsValidator implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {
    console.log('UserIdExistsValidator created', prismaService);
  }

  async validate(id: string, args: ValidationArguments) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'User Id ($value) not exists!';
  }
}
