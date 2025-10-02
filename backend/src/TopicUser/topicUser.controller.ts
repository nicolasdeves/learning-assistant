import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { TopicUserService } from "./topicUser.service";
import { Prisma } from "@prisma/client";

@Controller('topicUsers')
export class TopicUserController {
    constructor(private readonly topicUserService: TopicUserService) {}

    @Post()
    @HttpCode(201)
    async addTopicUser(
        @Body() body: Prisma.TopicUserUncheckedCreateInput
    ) {
        try {
            const topicUserAlreadyExists = await this.topicUserService.getOne({
                googleUserId: body.googleUserId,
                topicId: body.topicId
            });

            if (!topicUserAlreadyExists) {
                const topicUser = await this.topicUserService.create(body)

                return { topicUser }
            } else {
                topicUserAlreadyExists && this.topicUserService.update(topicUserAlreadyExists.id, {
                    level: body.level
                });
            }

        } catch (error: any) {
            console.log(error)
            return { error, message: "Error creating topic user"}
        }

    }
}