import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ExerciseService } from "./exercise.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { ExerciseController } from "./exercise.controller";


@Module({
    controllers: [ExerciseController],
    providers: [ExerciseService, PrismaClient],
    exports: [ExerciseService],
    imports: []
})

export class ExerciseModule {}