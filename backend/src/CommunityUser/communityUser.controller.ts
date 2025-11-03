import { Controller, Get, Param } from '@nestjs/common';
import { CommunityUserService } from './communityUser.service';
import { TopicService } from 'src/Topic/topic.service';

@Controller('communitiesUsers')
export class CommunityUserController {
  constructor(
    private readonly communityuserService: CommunityUserService,
    private readonly topicService: TopicService
  
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

    const topicsIds = topics.map((topic) => topic.id);

    const communitiesUsers = await this.communityuserService.getByConditions({
      googleUserId,
      community: {
        topicId: { in: topicsIds }
      }
    })

    console.log(communitiesUsers);
    return communitiesUsers;
  }
}
