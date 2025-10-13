import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Topic } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class TopicService extends DefaultService<
  Topic,
  Prisma.TopicCreateInput,
  Prisma.TopicUpdateInput,
  PrismaClient['topic'],
  Prisma.TopicWhereInput,
  Prisma.TopicInclude
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.topic);
  }
}
