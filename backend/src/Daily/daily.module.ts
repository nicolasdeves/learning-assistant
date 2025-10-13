import { Module } from "@nestjs/common";
import { DailyService } from "./daily.service";
import { DailyController } from "./daily.controller";
import { PrismaClient } from "@prisma/client";


@Module({
    controllers: [DailyController],
    providers: [DailyService, PrismaClient],
    exports: [DailyService],
    imports: []
})

export class DailyModule {}