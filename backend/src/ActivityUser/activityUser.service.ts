import { Injectable } from '@nestjs/common';
import { ActivityUser, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class ActivityUserService extends DefaultService<
  ActivityUser,
  Prisma.ActivityUserUncheckedCreateInput,
  Prisma.ActivityUserUpdateInput,
  PrismaClient['activityUser'],
  Prisma.ActivityUserWhereInput,
  Prisma.ActivityUserInclude

> {
  constructor(private prisma: PrismaClient) {
    super(prisma.activityUser);
  }

}
