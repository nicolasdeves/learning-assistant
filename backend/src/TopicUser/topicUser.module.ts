import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { TopicUserService } from "./topicUser.service";
import { TopicUserController } from "./topicUser.controller";


@Module({
    controllers: [TopicUserController],
    providers: [TopicUserService, PrismaClient],
    exports: [TopicUserService],
    imports: []
})

export class TopicUserModule {}