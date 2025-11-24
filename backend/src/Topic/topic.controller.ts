import { Body, Controller, Delete, Get, HttpCode, Logger, Param, ParseIntPipe, Post } from '@nestjs/common';
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
        createdByGoogleUserId: googleUserId,
        active: 1
      }, 
      {
        levels: true,
      });
  }

  @Get('user/:googleUserId')
  async getByUser(@Param('googleUserId') googleUserId: string) {
    const topics = await this.topicService.getByConditions({
      active: 1,
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
      createdByGoogleUserId: null,
      active: 1
    }, 
    {
      levels: true,
    });
  }

  @Post('createdByUser')
  @HttpCode(201)
  async createdByUser(@Body() body: Prisma.TopicCreateInput) {
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

  @Delete('disable/:topicId')
  async disable(@Param('topicId', ParseIntPipe) topicId: number) {
    await this.topicService.update(topicId, { active: 0 });

    return topicId;
  }
}
