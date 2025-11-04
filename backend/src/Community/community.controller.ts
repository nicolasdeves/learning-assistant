import { Controller, Get, Param } from '@nestjs/common';
import { CommunityService } from './community.service';
import { TopicService } from 'src/Topic/topic.service';

@Controller('communities')
export class CommunityController {
  constructor(
    private readonly communityService: CommunityService,
    private readonly topicService: TopicService,
  ) {}

  @Get('/getByUser/:googleUserId')
  async getCommunitiesByUser(@Param('googleUserId') googleUserId: string) {
    const topics = await this.topicService.getByConditions({
      topicUser: {
        some: {
          googleUserId,
        },
      },
    });

    const topicsIds = topics.map((topic) => (
      topic.id
    ));

    const communities = await this.communityService.getByConditions({ topicId: { in: topicsIds }}, {communityUsers: true });

    //community user p ver se o ususario ja ta incrito na comunidade

    return communities;
  }
}
