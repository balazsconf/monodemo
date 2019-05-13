import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemMenuComponent} from "./list-item/list-item-menu.component";
import {ListItemSharedModule} from "@monodemo/list-item-shared";

@NgModule({
  imports: [CommonModule, ListItemSharedModule],
  declarations: [
    ListItemMenuComponent
  ],
  exports: [
    ListItemMenuComponent
  ]
})
export class ListItemMenuModule {}
