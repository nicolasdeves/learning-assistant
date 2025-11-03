import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { MessageService } from "./message.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { MessageController } from "./message.controller";


@Module({
    controllers: [MessageController],
    providers: [MessageService, PrismaClient],
    exports: [MessageService],
    imports: []
})

export class MessageModule {}