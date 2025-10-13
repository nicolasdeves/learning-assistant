import { Module } from '@nestjs/common';
import { AiModule } from './AI/ai.module';
import { ConfigModule } from '@nestjs/config';
import { DefaultModule } from './Default/default.module';
import { TopicModule } from './Topic/topic.module';
import { ActivityModule } from './Activity/activity.module';
import { TopicUserModule } from './TopicUser/topicUser.module';
import { DailyModule } from './Daily/daily.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  AiModule,
  DefaultModule,
  TopicModule,
  ActivityModule,
  TopicUserModule,
  DailyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
