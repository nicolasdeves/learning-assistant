import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { TopicUserService } from "./topicUser.service";


@Module({
    controllers: [],
    providers: [TopicUserService, PrismaClient],
    exports: [],
    imports: []
})

export class TopicModule {}