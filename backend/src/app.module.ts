import { Module } from '@nestjs/common';
import { AiModule } from './AI/ai.module';
import { ConfigModule } from '@nestjs/config';
import { DefaultModule } from './Default/default.module';
import { TopicModule } from './Topic/topic.module';
import { ActivityModule } from './Activity/activity.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  AiModule,
  DefaultModule,
  TopicModule,
  ActivityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
