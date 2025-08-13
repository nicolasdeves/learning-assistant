import { Controller, Get } from "@nestjs/common";
import { AiService } from "./ai.service";

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) {}

    @Get()
    test() {
        try {
            const response = this.aiService.generateContent("Test");

            return response
        } catch (error) {
            return error.message
        }
    }
}