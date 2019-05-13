import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from "../list/list.component";
import {ListItemTouchModule} from "@monodemo/list-item-touch";

@NgModule({
  imports: [
    CommonModule,
    ListItemTouchModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})
export class ListPhoneModule { }
