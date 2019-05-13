import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemMenuModule} from "@monodemo/list-item-menu";
import {ListComponent} from "../list/list.component";

@NgModule({
  imports: [
    CommonModule,
    ListItemMenuModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [ListComponent]
})
export class ListDesktopModule { }
