import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Daily } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class DailyService extends DefaultService<
  Daily,
  Prisma.DailyUncheckedCreateInput,
  Prisma.DailyUpdateInput,
  PrismaClient['daily'],
  Prisma.DailyWhereInput,
  Prisma.DailyInclude
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.daily);
  }
}
