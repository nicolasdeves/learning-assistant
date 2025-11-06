import { Injectable } from '@nestjs/common';
import { User, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class UserService extends DefaultService<
  User,
  Prisma.UserUncheckedCreateInput,
  Prisma.UserUpdateInput,
  PrismaClient['user'],
  Prisma.UserWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.user);
  }

}
