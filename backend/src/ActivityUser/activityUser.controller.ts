import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ActivityUserService } from './activityUser.service';
import { Prisma } from '@prisma/client';

@Controller('activityUsers')
export class ActivityUserController {
  constructor(private readonly activityuserService: ActivityUserService) {}

  @Post()
  @HttpCode(201)
  async relationUserInActivity(
    @Body() body: Prisma.ActivityUserUncheckedCreateInput,
  ) {
    try {
      const alreadyExists = await this.activityuserService.getOne({
        googleUserId: body.googleUserId,
        activityId: body.activityId,
      });

      if (!alreadyExists) {
        const activityUser = await this.activityuserService.create(body);
        return activityUser;
      }

      return alreadyExists;
    } catch (error: any) {
      console.log(error);
      return { error, message: 'Error creating Activity User :(' };
    }
  }

  @Get('/user/:googleUserId')
  async getActivityUserByUser(@Param('googleUserId') googleUserId: string) {
    try {
      const activitiesUser = await this.activityuserService.getByConditions(
        {
          googleUserId,
        },
        {
          activity: { include: { topic: true } },
        },
      );

      return activitiesUser;
    } catch (error: any) {
      console.log(error);
      return { error, message: 'Error get Activity User :(' };
    }
  }
}
