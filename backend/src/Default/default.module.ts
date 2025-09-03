import { Module } from "@nestjs/common";
import { DefaultService } from "./default.service";

@Module({
    controllers: [],
    providers: [DefaultService],
    exports: [],
    imports: []
})

export class DefaultModule {}