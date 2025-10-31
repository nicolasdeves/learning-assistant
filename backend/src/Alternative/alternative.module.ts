import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { AlternativeService } from "./alternative.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { AlternativeController } from "./alternative.controller";


@Module({
    controllers: [AlternativeController],
    providers: [AlternativeService, PrismaClient],
    exports: [AlternativeService],
    imports: []
})

export class AlternativeModule {}