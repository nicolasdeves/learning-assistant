import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ActivityService } from "./activity.service";


@Module({
    controllers: [],
    providers: [ActivityService, PrismaClient],
    exports: [],
    imports: []
})

export class ActivityModule {}