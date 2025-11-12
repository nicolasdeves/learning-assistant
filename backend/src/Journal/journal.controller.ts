import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { JournalService } from './journal.service';
import { Prisma } from '@prisma/client';
import { TopicUserService } from 'src/TopicUser/topicUser.service';

@Controller('journal')
export class JournalController {
  constructor(
    private readonly journalService: JournalService,
    private readonly topicUserService: TopicUserService,
  ) {}

  @Get('/user/:googleUserId/topic/:topicId')
  async getMessages(
    @Param('googleUserId') googleUserId: string,
    @Param('topicId', ParseIntPipe) topicId: number,
  ) {
    const journal = this.journalService.getByConditions(
      {
        topicId,
        googleUserId,
      },
      {
        topic: true,
        level: true,
      },
      {
        createdAt: 'desc',
      },
    );

    return journal;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: Prisma.JournalUncheckedCreateInput) {
    if (!body.levelId) {
      const topicUser = await this.topicUserService.getOne({
        googleUserId: body.googleUserId,
        topicId: body.topicId,
      });

      if (topicUser && topicUser.levelId) {
        body.levelId = topicUser.levelId;
      }
    }

    if (body.content) {
      await this.journalService.create(body);
    }

    return;
  }
}
