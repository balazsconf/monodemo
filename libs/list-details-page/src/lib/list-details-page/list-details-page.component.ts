import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Launch} from "@monodemo/graphql-schema";

@Component({
  selector: 'monodemo-list-details-page',
  templateUrl: './list-details-page.component.html',
  styleUrls: ['./list-details-page.component.scss']
})
export class ListDetailsPageComponent implements OnInit {

  launches: Launch[];
  loading = true;
  errors: any;

  selectedLaunch: Launch;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery<{launches: Launch[]}>({
        query: gql`
            query Launches {
              launches {
                id
                date
                site
                success
                upcoming
                mission {
                  name
                  details
                  missionPatchSmall
                  missionPatchLarge
                  video
                }
                rocket {
                  id
                  type
                  name
                  reused
                  flight
                  payload {
                    id
                    customers
                    nationality
                    manufacturer
                    payloadType
                  }
                }
              }
            }
          `,
      })
      .valueChanges.subscribe(result => {
        this.launches = result.data && result.data.launches;
        this.loading = result.loading;
        this.errors = result.errors;

        this.select(this.launches[0]);
    });
  }

  select(launch: Launch) {
    this.selectedLaunch = launch;
  }

}
