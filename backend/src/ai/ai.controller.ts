import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AiService } from './ai.service';
import { TopicService } from 'src/Topic/topic.service';

@Controller('ai')
export class AiController {
  constructor(
    private readonly aiService: AiService,
    private readonly topicService: TopicService,
  ) {}

  @Get('/tip/user/:googleUserId')
  async generateTip(@Param('googleUserId') googleUserId: string) {
    try {
      console.log(googleUserId);

      const USE_AI = true;

      if (!USE_AI) {
        return 'Para melhorar sua pronúncia, tente imitar falantes nativos. Ouça podcasts, filmes ou músicas e repita as frases em voz alta. Isso ajuda a pegar a entonação e o ritmo do idioma!';
      }

      const userTopics = await this.topicService.getByConditions(
        {
          topicUser: { some: { googleUserId } },
        },
        {
          topicUser: { include: { level: true } },
        },
      );

      const randomTopic: any =
        userTopics[Math.floor(Math.random() * userTopics.length)];

      console.log(randomTopic);

      const prompt = `Gere uma dica simples de 1 linha de ${randomTopic.name} para uma pessoa de nível ${randomTopic.topicUser[0].level.name}`;

      const tip = this.aiService.generateContent(prompt);

      return tip;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  @Get('/activity/topic/:topicId/level/:level')
  async generateActivity(
    @Param('topicId', ParseIntPipe) topicId: number,
    @Param('level') level: string,
  ) {
    try {
      // Para nao ficar consumindo créditos...
      // return 'Para melhorar sua pronúncia, tente imitar falantes nativos. Ouça podcasts, filmes ou músicas e repita as frases em voz alta. Isso ajuda a pegar a entonação e o ritmo do idioma!';

      const topic = await this.topicService.getOne({ id: topicId });

      const message =
        topic && 'Gere uma atividade de ' + topic.name + 'de nível ' + level;
      const response =
        message && (await this.aiService.generateContent(message));

      const cleanResponse =
        response && response.replace(/```json\n?|\n?```/g, '');

      const jsonResponse = cleanResponse && JSON.parse(cleanResponse);

      return jsonResponse.response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
}
