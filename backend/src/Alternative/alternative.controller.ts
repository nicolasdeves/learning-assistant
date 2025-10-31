import { Controller, Get, Param } from '@nestjs/common';
import { AlternativeService } from './alternative.service';

@Controller('communities')
export class AlternativeController {
  constructor(
    private readonly alternativeService: AlternativeService,
  ) {}

}
