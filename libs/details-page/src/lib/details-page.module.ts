import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DetailsModule} from "@monodemo/details";
import {DetailsPageComponent} from './details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPageComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    DetailsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPageComponent]
})
export class DetailsPageModule {}
