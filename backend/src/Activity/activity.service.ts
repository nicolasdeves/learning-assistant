import { Injectable } from '@nestjs/common';
import { Activity, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class ActivityService extends DefaultService<
  Activity,
  Prisma.ActivityUncheckedCreateInput,
  Prisma.ActivityUpdateInput,
  PrismaClient['activity'],
  Prisma.ActivityWhereInput,
  Prisma.ActivityInclude
  
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.activity);
  }

}
