import { Module } from '@nestjs/common';
import {SpacexResolvers} from "./spacex.resolvers";
import {SpacexService} from "./spacex.service";

@Module({
  providers: [SpacexResolvers, SpacexService],
})
export class SpacexModule {}

