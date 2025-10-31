import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseTypeService } from './exercise.service';

@Controller('communities')
export class ExerciseTypeController {
  constructor(
    private readonly exercisetypeService: ExerciseTypeService,
  ) {}

}
