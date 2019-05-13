import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from "path";
import {SpacexModule} from "./spacex/spacex.module";

@Module({
  imports: [
    SpacexModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'libs/graphql-schema/src/lib/graphql.schema.ts'),
        outputAs: 'class'
      },
      installSubscriptionHandlers: false,
      debug: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
