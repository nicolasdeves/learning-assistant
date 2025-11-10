import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { includes } from 'zod/v4';
import { Prisma } from '@prisma/client';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('/getByCommunity/:communityId')
  async getMessages(@Param('communityId', ParseIntPipe) communityId: number) {
    const messages = await this.messageService.getByConditions(
      {
        communityUser: {
          communityId: communityId,
        },
      },
      {
        communityUser: true,
      },
    );

    return messages;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: Prisma.MessageUncheckedCreateInput) {
    return await this.messageService.create(body);
  }
}
