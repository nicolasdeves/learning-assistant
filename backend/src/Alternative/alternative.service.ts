import { Injectable } from '@nestjs/common';
import { Alternative, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class AlternativeService extends DefaultService<
  Alternative,
  Prisma.AlternativeUncheckedCreateInput,
  Prisma.AlternativeUpdateInput,
  PrismaClient['alternative'],
  Prisma.AlternativeWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.alternative);
  }

}
