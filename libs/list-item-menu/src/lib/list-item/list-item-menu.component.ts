import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";

@Component({
  selector: 'monodemo-list-item',
  templateUrl: './list-item-menu.component.html',
  styleUrls: ['./list-item-menu.component.scss']
})
export class ListItemMenuComponent implements OnInit {

  @Input() launch: Launch;

  @Output() clicked = new EventEmitter<Launch>();
  @Output() optionClicked = new EventEmitter<Launch>();

  constructor() { }

  ngOnInit() {
  }
}
