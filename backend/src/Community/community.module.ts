import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CommunityService } from "./community.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { CommunityController } from "./community.controller";


@Module({
    controllers: [CommunityController],
    providers: [CommunityService, PrismaClient],
    exports: [CommunityService],
    imports: [TopicModule]
})

export class CommunityModule {}