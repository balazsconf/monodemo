import {Args, Query, Resolver} from '@nestjs/graphql';
import {SpacexService} from "./spacex.service";
import {Launch} from "@monodemo/graphql-schema";

@Resolver('Spacex')
export class SpacexResolvers {

  constructor(private service: SpacexService) {}

  @Query('launches')
  async launches(
  ): Promise<Launch[]> {
    return await this.service.all();
  }

  @Query('launch')
  async launch(
    @Args('id') id: string,
  ): Promise<Launch> {
    return await this.service.byId(id);
  }


}
