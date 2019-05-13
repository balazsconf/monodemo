import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {HttpClientModule} from "@angular/common/http";
import {HttpLink, HttpLinkModule} from "apollo-angular-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";


const routes: Routes = [
  {
    path: '',
    loadChildren: '@monodemo/list-page#ListPageModule'
  },
  {
    path: ':id',
    loadChildren: '@monodemo/details-page#DetailsPageModule'
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ApolloModule,
    HttpClientModule,
    HttpLinkModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:3333/graphql"
        })
      }
    },
    deps: [HttpLink]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
