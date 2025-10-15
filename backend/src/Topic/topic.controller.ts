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
    return await this.topicService.getByConditions({
      topicUser: {
        some: {
          googleUserId,
        },
      },
    });
  }

  @Get('/topics/activitiesInformations/:googleUserId')
  async getUserTopicsActivitiesInformations(
    @Param('googleUserId') googleUserId: string,
  ) {
    // tarefas diarias realizadas
    //tarefas diarias objetivo
    //atividades realizadas total
    //ultima atividade realizada (data)
  }
}
