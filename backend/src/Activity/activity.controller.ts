import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { AiService } from 'src/AI/ai.service';
import { TopicService } from 'src/Topic/topic.service';

@Controller('activities')
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
    private readonly aiService: AiService,
    private readonly topicService: TopicService,
  ) {}

  @Get('/user/:googleUserId/topic/:topicId/level/:levelId')
  async generateActivity(
    @Param('googleUserId') googleUserId: string,
    @Param('topicId', ParseIntPipe) topicId: number,
    @Param('levelId', ParseIntPipe) levelId: number,
  ) {
    const topic = await this.topicService.getOne({ id: topicId });
    const level = 'B1';
    const exercisesQuantity = 1;

    const prompt = `
        Preciso que gere uma atividade de ${topic?.name} de nível ${level}. 
        A estrutura será a seguinte:
        Retorne um JSON;
        A atividade possui um título que engloba todos exercícios (name);
        A atividade é um conjunto de ${exercisesQuantity} exercícios (exercises);
        Cada exercício vai ter um nome (name) e 4 respostas (answers);
        Cada resposta (answer) vai ter um rótulo (label);
        Cada resposta (answer) vai ter um valor, identificador (value);
        Cada exercício vai ter um campo com o valor de resposta correta (correctAnswer) onde vai ter o value da answer que está correta;
    `;

    const activity = await this.aiService.generateContent(prompt);

    console.log(activity);

    return activity;
  }

  @Get('/user/:googleUserId')
  async getByUser(@Param('googleUserId') googleUserId: string) {
    const activities = this.activityService.getByConditions({ googleUserId });

    return activities
  }
}
