import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Topic } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class TopicService extends DefaultService<
  Topic,
  { title: string },
  { title?: string },
  PrismaClient['topic'],
  Prisma.TopicWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.topic);
  }
}
