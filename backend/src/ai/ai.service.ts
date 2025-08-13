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
        systemInstruction: "You are a learning assistant in a application. Talk in Portuguese.",
        temperature: 0.1
      }
    });

    const textoResposta = response.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response available';

    return textoResposta
  }
}