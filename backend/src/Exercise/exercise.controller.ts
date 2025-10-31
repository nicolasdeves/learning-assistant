import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('communities')
export class ExerciseController {
  constructor(
    private readonly exerciseService: ExerciseService,
  ) {}

}
