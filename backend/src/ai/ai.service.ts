import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class AiService {
  private readonly genAI: GoogleGenAI;

  constructor(private readonly configService: ConfigService) {}

  async generateContent(prompt: string) {
    const apiKey = this.configService.get<string>('GOOGLE_API_KEY');

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `Você é um assistente de aprendizado em um aplicativo. Sempre responda em português brasileiro. 
      Sempre responda em JSON, pois está dentro de uma aplicação. A resposta principal deve sempre vir dentro do objeto chamado response, ou seja, quero obter o resultado com .response.
      Se for uma atividade dentro do response deve vir: title, correctAnswer, um array de answers e dentro deste array vir value (identifiador, 1, 2, 3 ou 4) e a label que é o titulo da opcao. 
      `,
        temperature: 0.1,
      },
    });

    const responseText =
      response.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response available';

    const cleanedResponse = responseText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const jsonResponse = JSON.parse(cleanedResponse);

    return jsonResponse.response;
  }
}
