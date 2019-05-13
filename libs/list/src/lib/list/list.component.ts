import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";

@Component({
  selector: 'monodemo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() launches: Launch[];
  @Output() selected = new EventEmitter<Launch>();

  constructor() { }

  ngOnInit() {
  }

  select(launch: Launch) {
    this.selected.emit(launch);
  }

}
