import { Injectable } from '@nestjs/common';
import { Message, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class MessageService extends DefaultService<
  Message,
  Prisma.MessageUncheckedCreateInput,
  Prisma.MessageUpdateInput,
  PrismaClient['message'],
  Prisma.MessageWhereInput,
  Prisma.MessageInclude
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.message);
  }

}
