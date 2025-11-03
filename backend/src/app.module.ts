import { Module } from '@nestjs/common';
import { AiModule } from './AI/ai.module';
import { ConfigModule } from '@nestjs/config';
import { DefaultModule } from './Default/default.module';
import { TopicModule } from './Topic/topic.module';
import { ActivityModule } from './Activity/activity.module';
import { TopicUserModule } from './TopicUser/topicUser.module';
import { DailyModule } from './Daily/daily.module';
import { ExerciseModule } from './Exercise/exercise.module';
import { ExerciseTypeModule } from './ExerciseType/exercise.module';
import { AlternativeModule } from './Alternative/alternative.module';
import { LevelModule } from './Level/level.module';
import { CommunityModule } from './Community/community.module';
import { MessageModule } from './Message/message.module';
import { CommunityUserModule } from './CommunityUser/communityUser.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  AiModule,
  DefaultModule,
  TopicModule,
  ActivityModule,
  TopicUserModule,
  DailyModule,
  AlternativeModule,
  ExerciseModule,
  ExerciseTypeModule,
  LevelModule,
  CommunityModule,
  MessageModule,
  CommunityUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
