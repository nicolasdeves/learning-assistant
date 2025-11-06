import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { UserService } from "./user.service";
import { AiModule } from "src/AI/ai.module";
import { TopicModule } from "src/Topic/topic.module";
import { UserController } from "./user.controller";


@Module({
    controllers: [UserController],
    providers: [UserService, PrismaClient],
    exports: [UserService],
    imports: []
})

export class UserModule {}