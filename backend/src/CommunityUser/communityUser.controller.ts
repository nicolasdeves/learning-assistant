import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommunityUserService } from './communityUser.service';
import { TopicService } from 'src/Topic/topic.service';

@Controller('communitiesUsers')
export class CommunityUserController {
  constructor(
    private readonly communityuserService: CommunityUserService,
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

    const topicsIds = topics.map((topic) => topic.id);

    const communitiesUsers = await this.communityuserService.getByConditions({
      googleUserId,
      community: {
        topicId: { in: topicsIds },
      },
    });

    return communitiesUsers;
  }

  @Get('/getCommunityUserBy/user/:googleUserId/community/:communityId')
  async getCommunityUserBy(
    @Param('googleUserId') googleUserId: string,
    @Param('communityId', ParseIntPipe) communityId: number,
  ) {
    console.log('bbbbbbbbbbbbbbbbbb')
    console.log(communityId)
    console.log(googleUserId)
    
    const communityUser = await this.communityuserService.getOne({
      googleUserId,
      communityId,
    });

    console.log(communityUser)

    if (!communityUser) {
      const communityUserCreated = this.communityuserService.create({ communityId, googleUserId });
      return communityUserCreated;
    }

    return communityUser;
  }
}
