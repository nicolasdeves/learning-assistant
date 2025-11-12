import { Controller, Get, Logger, Param } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  async get() {
    return await this.topicService.getAll({
      levels: true,
    });
  }

  @Get('user/:googleUserId')
  async getByUser(@Param('googleUserId') googleUserId: string) {
    const topics = await this.topicService.getByConditions({
      topicUser: {
        some: {
          googleUserId,
        },
      },
      },
      {
        topicUser: {
          include: {
            level: true
          }
        },
        levels: true
      }
    );

    console.log(JSON.stringify(topics))

    return topics
  }
}
