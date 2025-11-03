import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CommunityUserService } from "./communityUser.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { CommunityUserController } from "./communityUser.controller";
import { TopicService } from "src/Topic/topic.service";


@Module({
    controllers: [CommunityUserController],
    providers: [CommunityUserService, PrismaClient],
    exports: [CommunityUserService],
    imports: [TopicModule]
})

export class CommunityUserModule {}