import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ActivityService } from "./activity.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { ActivityController } from "./activity.controller";
import { ExerciseModule } from "src/Exercise/exercise.module";
import { ExerciseTypeModule } from "src/ExerciseType/exercise.module";
import { AlternativeModule } from "src/Alternative/alternative.module";
import { LevelModule } from "src/Level/level.module";


@Module({
    controllers: [ActivityController],
    providers: [ActivityService, PrismaClient],
    exports: [],
    imports: [AiModule, TopicModule, ExerciseModule, ExerciseTypeModule, AlternativeModule, LevelModule]
})

export class ActivityModule {}