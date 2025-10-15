import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { AiService } from "./ai.service";
import { TopicService } from "src/Topic/topic.service";

@Controller('ai')
export class AiController {
    constructor(
        private readonly aiService: AiService,
        private readonly topicService: TopicService
    ) {}

    @Get('/tip/topic/:topicId')
    async generateTip(
        @Param('topicId', ParseIntPipe) topicId: number 
    ) {
        try {
            // Para nao ficar consumindo créditos...
            return 'Para melhorar sua pronúncia, tente imitar falantes nativos. Ouça podcasts, filmes ou músicas e repita as frases em voz alta. Isso ajuda a pegar a entonação e o ritmo do idioma!';

            // const topic = await this.topicService.getOne({ id: topicId });

            // const prompt = topic && "Gere uma dica curta de " + topic.name;
            // const response = prompt && await this.aiService.generateContent(prompt);

            // return response.response;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    @Get('/activity/topic/:topicId/level/:level')
    async generateActivity(
        @Param('topicId', ParseIntPipe) topicId: number,
        @Param('level') level: string 
    ) {
        try {
            // Para nao ficar consumindo créditos...
            // return 'Para melhorar sua pronúncia, tente imitar falantes nativos. Ouça podcasts, filmes ou músicas e repita as frases em voz alta. Isso ajuda a pegar a entonação e o ritmo do idioma!';

            const topic = await this.topicService.getOne({ id: topicId });

            const message = topic && "Gere uma atividade de " + topic.name + "de nível " + level;
            const response = message && await this.aiService.generateContent(message);

            const cleanResponse = response && response.replace(/```json\n?|\n?```/g, '');

            const jsonResponse = cleanResponse && JSON.parse(cleanResponse);
            console.log(jsonResponse.response);

            return jsonResponse.response;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}