import { Injectable } from '@nestjs/common';
import { ExerciseType, Prisma, PrismaClient } from '@prisma/client';
import { DefaultService } from 'src/Default/default.service';

@Injectable()
export class ExerciseTypeService extends DefaultService<
  ExerciseType,
  Prisma.ExerciseTypeCreateInput,
  Prisma.ExerciseTypeUpdateInput,
  PrismaClient['exerciseType'],
  Prisma.ExerciseTypeWhereInput
> {
  constructor(private prisma: PrismaClient) {
    super(prisma.exerciseType);
  }

}
