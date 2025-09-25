import { Module } from "@nestjs/common";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { PrismaClient } from "@prisma/client";


@Module({
    controllers: [TopicController],
    providers: [TopicService, PrismaClient],
    exports: [TopicService],
    imports: []
})

export class TopicModule {}