import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListPhoneModule} from "@monodemo/list";
import {ListPageComponent} from './list-page/list-page.component';
import {ApolloModule} from "apollo-angular";

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ListPhoneModule
  ],
  declarations: [ListPageComponent]
})
export class ListPageModule {}
