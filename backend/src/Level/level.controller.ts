import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('communities')
export class LevelController {
  constructor(
    private readonly levelService: LevelService,
  ) {}

}
