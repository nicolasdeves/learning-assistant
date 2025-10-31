import { Injectable } from '@nestjs/common';
import { Exercise, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class ExerciseService extends DefaultService<
  Exercise,
  Prisma.ExerciseUncheckedCreateInput,
  Prisma.ExerciseUpdateInput,
  PrismaClient['exercise'],
  Prisma.ExerciseWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.exercise);
  }

}
