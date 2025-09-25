import { Module } from "@nestjs/common"
import { AiController } from "./ai.controller";
import { AiService } from "./ai.service";
import { TopicModule } from "src/Topic/topic.module";

@Module({
    controllers: [AiController],
    providers: [AiService],
    exports: [],
    imports: [TopicModule]
})

export class AiModule {}