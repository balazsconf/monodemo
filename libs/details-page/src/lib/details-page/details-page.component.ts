import {Component, OnDestroy, OnInit} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";
import {Apollo} from "apollo-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, tap} from "rxjs/operators";
import {Subscription} from "rxjs";
import gql from "graphql-tag";

const query = gql`
query Launch($id: ID!) {
  launch(id: $id) {
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
  selector: 'monodemo-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit, OnDestroy {

  launch: Launch;
  loading = true;
  errors: any;

  route$: Subscription;
  launch$: Subscription = new Subscription();

  constructor(private apollo: Apollo, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route$ = this.route.params.pipe(
      filter( params => params['id'])
    ).subscribe( (params) => {
      this.launch$.unsubscribe();
      this.launch$ = this.apollo.watchQuery<{ launch: Launch }>({
        query, variables: { id: params['id'] }
      }).valueChanges.subscribe( ({data, loading, errors}) => {
        this.launch = data.launch;
        this.loading = loading;
        this.errors = errors;
      });
    });
  }

  ngOnDestroy() {
    this.route$.unsubscribe();
    this.launch$.unsubscribe();
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
