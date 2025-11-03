import { Injectable } from '@nestjs/common';
import { CommunityUser, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class CommunityUserService extends DefaultService<
  CommunityUser,
  Prisma.CommunityUserUncheckedCreateInput,
  Prisma.CommunityUserUpdateInput,
  PrismaClient['communityUser'],
  Prisma.CommunityUserWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.communityUser);
  }

}
