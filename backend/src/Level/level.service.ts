import { Injectable } from '@nestjs/common';
import { Level, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class LevelService extends DefaultService<
  Level,
  Prisma.LevelUncheckedCreateInput,
  Prisma.LevelUpdateInput,
  PrismaClient['level'],
  Prisma.LevelWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.level);
  }

}
