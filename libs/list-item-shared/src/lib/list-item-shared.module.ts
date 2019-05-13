import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemSharedComponent } from './list-item-shared/list-item-shared.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListItemSharedComponent],
  exports: [ListItemSharedComponent]
})
export class ListItemSharedModule {}
