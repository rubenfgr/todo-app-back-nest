import { Injectable } from '@nestjs/common';
import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from 'src/contexts/shared/services/prisma.service';

@ValidatorConstraint({ name: 'MediaIdExistsValidator', async: true })
@Injectable()
export class MediaIdExistsValidator implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(id: string, args: ValidationArguments) {
    const mediaExists = await this.prismaService.media.findUnique({
      where: {
        id: id,
      },
    });

    if (!mediaExists) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Media Id ($value) not exists!';
  }
}
