import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { TopicUserService } from "./topicUser.service";
import { Prisma } from "@prisma/client";

@Controller('topicUsers')
export class TopicUserController {
    constructor(private readonly topicUserService: TopicUserService) {}

    @Post()
    @HttpCode(201)
    async addTopicUser(
        @Body() body: Prisma.TopicUserCreateInput
    ) {
        try {
            const topicUser = await this.topicUserService.create(body)

            return {
                topicUser
            }
        } catch (error: any) {
            return { error, message: "Error creating topic user"}
        }

    }
}