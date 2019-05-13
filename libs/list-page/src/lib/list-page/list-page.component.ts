import {Component, OnInit} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";

const query = gql`
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
`;

@Component({
  selector: 'monodemo-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  launches: Launch[];
  loading = true;
  errors: any;

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    this.apollo
      .watchQuery<{launches: Launch[]}>({
        query: query,
      })
      .valueChanges.subscribe(result => {
        this.launches = result.data && result.data.launches;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  select(launch: Launch) {
    this.router.navigate([`${launch.id}`]);
  }

}
