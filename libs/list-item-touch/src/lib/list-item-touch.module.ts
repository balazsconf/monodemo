import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemTouchComponent} from "./list-item/list-item-touch.component";
import {ListItemSharedModule} from "@monodemo/list-item-shared";

@NgModule({
  imports: [CommonModule, ListItemSharedModule],
  declarations: [
    ListItemTouchComponent
  ],
  exports: [
    ListItemTouchComponent
  ]
})
export class ListItemTouchModule {}
