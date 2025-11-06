import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ActivityUserService } from "./activityUser.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { ActivityUserController } from "./activityUser.controller";


@Module({
    controllers: [ActivityUserController],
    providers: [ActivityUserService, PrismaClient],
    exports: [ActivityUserService],
    imports: []
})

export class ActivityUserModule {}