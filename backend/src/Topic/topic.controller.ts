import { Body, Controller, Get, HttpCode, Logger, Param, Post } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Prisma } from '@prisma/client';
import { LevelService } from 'src/Level/level.service';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService, private readonly levelService: LevelService) {}

  @Get('createdByUser/:googleUserId')
  async getTopicsByUserCreated(@Param('googleUserId') googleUserId: string) {
    return await this.topicService.getByConditions(
      {
        createdByGoogleUserId: googleUserId
      }, 
      {
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

    return topics
  }

  @Get()
  async get() {
    return await this.topicService.getByConditions(
    {
      createdByGoogleUserId: null
    }, 
    {
      levels: true,
    });
  }

  @Post('createdByUser')
  @HttpCode(201)
  async createdByUser(@Body() body: Prisma.TopicCreateInput) {
    console.log('entrou pra criaaaaaaaar')
    console.log(JSON.stringify(body))
    const topic = await this.topicService.create(body)

    const defaultLevels = ["Fácil", "Médio", "Difícil", "Ensino Fundamental", "Ensino Médio", "Ensino Superior",];

    await Promise.all(    
      defaultLevels.map(async level => {
        await this.levelService.create({
          name: level,
          topicId: topic.id
        })
    }))
    


  }
}
