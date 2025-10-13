import { Body, Controller, Get, HttpCode, Logger, Param, Post } from '@nestjs/common';
import { DailyService } from './daily.service';
import { Prisma } from '@prisma/client';

@Controller('diaries')
export class DailyController {
  constructor(private readonly dailyService: DailyService) {}

  @Get()
  async get() {
    return await this.dailyService.getAll();
  }

  @Post()
  @HttpCode(201)
  async create(
    @Body() body: Prisma.DailyUncheckedCreateInput
  ) {
    return await this.dailyService.create(body);
  }
}
