import { Module } from "@nestjs/common";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { PrismaClient } from "@prisma/client";
import { LevelModule } from "src/Level/level.module";


@Module({
    controllers: [TopicController],
    providers: [TopicService, PrismaClient],
    exports: [TopicService],
    imports: [LevelModule]
})

export class TopicModule {}