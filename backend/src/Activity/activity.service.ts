import { Injectable } from '@nestjs/common';
import { Activity, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class ActivityService extends DefaultService<
  Activity,
  Prisma.ActivityCreateInput,
  Prisma.ActivityUpdateInput,
  PrismaClient['topic'],
  Prisma.TopicWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.topic);
  }
}
