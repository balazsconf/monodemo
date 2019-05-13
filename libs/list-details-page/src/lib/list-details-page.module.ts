import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDetailsPageComponent} from './list-details-page/list-details-page.component';
import {RouterModule, Routes} from "@angular/router";
import {DetailsModule} from "@monodemo/details";
import {ListDesktopModule} from "@monodemo/list";

const routes: Routes = [
  {
    path: '',
    component: ListDetailsPageComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    ListDesktopModule,
    DetailsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListDetailsPageComponent]
})
export class ListDetailsPageModule {}
