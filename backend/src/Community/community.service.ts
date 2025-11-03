import { Injectable } from '@nestjs/common';
import { Community, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class CommunityService extends DefaultService<
  Community,
  Prisma.CommunityCreateInput,
  Prisma.CommunityUpdateInput,
  PrismaClient['community'],
  Prisma.CommunityWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.community);
  }

}
