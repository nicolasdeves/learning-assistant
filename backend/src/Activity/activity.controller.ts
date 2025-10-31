import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { AiService } from 'src/AI/ai.service';
import { TopicService } from 'src/Topic/topic.service';
import { GeneratedActivity } from './activity';
import { ExerciseService } from 'src/Exercise/exercise.service';
import { ExerciseTypeService } from 'src/ExerciseType/exercise.service';
import { AlternativeService } from 'src/Alternative/alternative.service';
import { LevelService } from 'src/Level/level.service';

@Controller('activities')
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
    private readonly aiService: AiService,
    private readonly topicService: TopicService,
    private readonly exerciseService: ExerciseService,
    private readonly exerciseTypeService: ExerciseTypeService,
    private readonly alternativeService: AlternativeService,
    private readonly levelService: LevelService,
  ) {}

  @Get('/generate/topic/:topicId/level/:levelId')
  async generateActivity(
    @Param('topicId', ParseIntPipe) topicId: number,
    @Param('levelId', ParseIntPipe) levelId: number,
  ) {
    const topic = await this.topicService.getOne({ id: topicId });
    const level = await this.levelService.getOne({ id: levelId });
    const exercisesQuantity = 3; // DEFINIR COMO VAI SER ESTA QUANTIDADE

    const USE_AI = false; //Indica se deve gerar uma nova atividade, ou buscar uma pelo ID (testes)

    const prompt = `
        Preciso que gere uma atividade de ${topic?.name} de nível ${level}. 
        A estrutura será a seguinte:
        Retorne um JSON;
        A atividade possui um título que engloba todos exercícios (title);
        A atividade é um conjunto de ${exercisesQuantity} exercícios (exercises);
        Cada exercício vai ter um nome (name) e 4 respostas (alternatives);
        Cada resposta (alternatives) vai ter um rótulo (label);
        Cada resposta (alternatives) vai ter um valor, identificador (value);
        Cada exercício vai ter um campo com o valor de resposta correta (correctAlternative) onde vai ter o value da alternative que está correta;

        Estrutura a ser seguida:
        {
        "title": "Introdução ao Javascript",
        "exercises": [
          {
            "name": "Identificação de Variáveis",
            "alternatives": [
              { "label": "A variável armazena valores", "value": "a" },
              { "label": "Variável é um tipo de loop", "value": "b" },
              { "label": "Variável serve só pra estilizar CSS", "value": "c" },
              { "label": "Variável é um error no console", "value": "d" }
            ],
            "correctAlternative": "c"
          },
          {
            "name": "Funções no Javascript",
            "alternatives": [
              { "label": "Funções servem pra repetir código", "value": "a" },
              { "label": "Funções são apenas comentários", "value": "b" },
              { "label": "Funções mudam o HTML sozinho", "value": "c" },
              { "label": "Funções só funcionam no backend", "value": "d" }
            ],
            "correctAlternative": "a"
          },
          {
            "name": "Tipos de Dados",
            "alternatives": [
              { "label": "String é texto", "value": "a" },
              { "label": "Number é uma imagem", "value": "b" },
              { "label": "Boolean é uma função", "value": "c" },
              { "label": "Objeto é sempre um array", "value": "d" }
            ],
            "correctAlternative": "d"
          }
        ]
      }
    `;

    if (USE_AI) {
      const generatedActivity: GeneratedActivity =
        await this.aiService.generateContent(prompt);

      const exerciseType = await this.exerciseTypeService.getOne({ id: 1 });

      if (topic && generatedActivity && exerciseType) {
        const activity = await this.activityService.create({
          topicId: topic.id,
          name: generatedActivity.title,
          date: new Date(),
        });

        await Promise.all(
          generatedActivity.exercises.map(async (exerciseGenerated) => {
            const exercise = await this.exerciseService.create({
              activityId: activity.id,
              exerciseTypeId: exerciseType.id,
              name: exerciseGenerated.name || 'nicolas',
              description: '',
            });

            await Promise.all(
              exerciseGenerated.alternatives.map((alternative) => {
                const isCorrect =
                  alternative.value == exerciseGenerated.correctAlternative;

                return this.alternativeService.create({
                  exerciseId: exercise.id,
                  description: alternative.label,
                  isCorrect,
                });
              }),
            );
          }),
        );
        const completedActivity = await this.activityService.getOne(
          {
            id: activity.id,
          },
          {
            exercises: {
              include: {
                alternatives: true,
              },
            },
          },
        );

        return completedActivity;
      }
    } else {
      const completedActivity = await this.activityService.getOne(
        {
          id: 2,
        },
        {
          exercises: {
            include: {
              alternatives: true,
            },
          },
        },
      );

      return completedActivity;
    }
  }
}
