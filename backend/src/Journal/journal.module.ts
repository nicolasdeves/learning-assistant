import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { JournalService } from "./journal.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { JournalController } from "./journal.controller";
import { TopicUserModule } from "src/TopicUser/topicUser.module";


@Module({
    controllers: [JournalController],
    providers: [JournalService, PrismaClient],
    exports: [JournalService],
    imports: [TopicUserModule]
})

export class JournalModule {}