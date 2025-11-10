import { Injectable } from '@nestjs/common';
import { Journal, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class JournalService extends DefaultService<
  Journal,
  Prisma.JournalUncheckedCreateInput,
  Prisma.JournalUpdateInput,
  PrismaClient['journal'],
  Prisma.JournalWhereInput,
  Prisma.JournalInclude

> {
  constructor(private prisma: PrismaClient) {
    super(prisma.journal);
  }

}
