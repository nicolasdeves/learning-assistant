import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, TopicUser } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class TopicUserService extends DefaultService<
  TopicUser,
  Prisma.TopicUserUncheckedCreateInput,
  Prisma.TopicUserUpdateInput,
  PrismaClient['topicUser'],
  Prisma.TopicUserWhereInput,
  Prisma.TopicUserInclude
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.topicUser);
  }
}
