import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TopicUserService } from './topicUser.service';
import { Prisma } from '@prisma/client';

@Controller('topicUsers')
export class TopicUserController {
  constructor(private readonly topicUserService: TopicUserService) {}

  @Post()
  @HttpCode(201)
  async addTopicUser(@Body() body: Prisma.TopicUserUncheckedCreateInput) {
    try {
      const topicUserAlreadyExists = await this.topicUserService.getOne({
        googleUserId: body.googleUserId,
        topicId: body.topicId,
      });

      if (!topicUserAlreadyExists) {
        const topicUser = await this.topicUserService.create(body);

        return { topicUser };
      }
    } catch (error: any) {
      console.log(error);
      return { error, message: 'Error creating topic user' };
    }
  }

  @Get('/verify/:googleUserId/:topicId')
  async verify(
    @Param('googleUserId') googleUserId: string,
    @Param('topicId', ParseIntPipe) topicId: number,
  ) {
    const topicUser = await this.topicUserService.getOne({
      googleUserId,
      topicId,
    });

    const exist = topicUser ? 1 : 0;

    return exist;
  }

  @Get('/:googleUserId')
  async getTopicUserByUser(
    @Param('googleUserId') googleUserId: string,
  ) {
    const topicsUser = await this.topicUserService.getByConditions(
    {
      googleUserId,
    }, 
    {
      level: true,
      topic: true
    });

    const log = new Logger()

    log.warn(topicsUser)

    return topicsUser;
  }
}
