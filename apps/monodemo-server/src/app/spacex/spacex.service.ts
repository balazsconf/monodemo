import {Injectable} from '@nestjs/common';

import {RESTDataSource} from "apollo-datasource-rest";
import {DataSourceConfig} from 'apollo-datasource';

@Injectable()
export class SpacexService extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v3/';
    this.initialize({} as DataSourceConfig<any>);  // TODO: use something like this instead: https://github.com/nestjs/graphql/issues/215
  }

  async all() {
    const launches = await this.get('launches');
    return Array.isArray(launches)
      ? launches.map(launch => this.launchReducer(launch))
      : [];
  }

  async byId(id: string) {
    const launches = await this.get('launches', { flight_number: id });
    return this.launchReducer(launches[0]);
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      date: launch.launch_date_utc,
      success: launch.launch_success,
      site: launch.launch_site && launch.launch_site.site_name,
      upcoming: launch.upcoming,
      mission: {
        name: launch.mission_name,
        details: launch.details,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
        video: launch.links.youtube_id
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
        reused: launch.rocket.fairings && launch.rocket.fairings.reused,
        flight: launch.rocket.first_stage.cores[0].flight,
        payload: {
          id: launch.rocket.second_stage.payloads[0].payload_id,
          customers: launch.rocket.second_stage.payloads[0].customers[0],
          nationality: launch.rocket.second_stage.payloads[0].nationality,
          manufacturer: launch.rocket.second_stage.payloads[0].manufacturer,
          payloadType: launch.rocket.second_stage.payloads[0].payload_type,
        }
      }
    };
  }

}
