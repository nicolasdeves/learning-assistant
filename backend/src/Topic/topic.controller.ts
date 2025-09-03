import { Controller, Get } from "@nestjs/common";
import { TopicService } from "./topic.service";

@Controller('topics')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @Get()
    async test() {
        const aa = await this.topicService.getAll()
        return aa
    }
}