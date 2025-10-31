import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { ExerciseTypeController } from "./exercise.controller";
import { ExerciseTypeService } from "./exercise.service";


@Module({
    controllers: [ExerciseTypeController],
    providers: [ExerciseTypeService, PrismaClient],
    exports: [ExerciseTypeService],
    imports: []
})

export class ExerciseTypeModule {}