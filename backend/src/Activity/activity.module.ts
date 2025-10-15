import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ActivityService } from "./activity.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { ActivityController } from "./activity.controller";


@Module({
    controllers: [ActivityController],
    providers: [ActivityService, PrismaClient],
    exports: [],
    imports: [AiModule, TopicModule]
})

export class ActivityModule {}