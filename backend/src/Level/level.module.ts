import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { LevelService } from "./level.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { LevelController } from "./level.controller";


@Module({
    controllers: [LevelController],
    providers: [LevelService, PrismaClient],
    exports: [LevelService],
    imports: []
})

export class LevelModule {}