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
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Você é um assistente de aprendizado em um aplicativo. Sempre responsa em português brasileiro. Sempre responda em JSON, pois está dentro de uma aplicação. A resposta princiapl deve sempre vir dentro do objeto chamado response, ou seja, quero obter o resultado com .response",
        temperature: 0.1
      }
    });

    const textoResposta = response.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response available';

    return textoResposta
  }
}