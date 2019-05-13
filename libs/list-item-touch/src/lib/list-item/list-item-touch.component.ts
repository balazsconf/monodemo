import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";
import * as Hammer from 'hammerjs';

@Component({
  selector: 'monodemo-list-item',
  templateUrl: './list-item-touch.component.html',
  styleUrls: ['./list-item-touch.component.scss']
})
export class ListItemTouchComponent implements OnInit {
  static CARD_HEIGHT = 69;

  @Input() launch: Launch;

  @Output() clicked = new EventEmitter<Launch>();
  @Output() optionClicked = new EventEmitter<Launch>();

  Hammer = Hammer;

  private _menuOpen = false;
  public set menuOpen(value: boolean){
    if (value) {
      this.left = -ListItemTouchComponent.CARD_HEIGHT;
      this._menuOpen = true;
    } else {
      this.left = 0;
      this._menuOpen = false;
    }
  }
  public get menuOpen() {
    return this._menuOpen;
  }

  public left = 0;
  public panStartLeft = 0;
  public animate = true;

  constructor() {
  }

  ngOnInit() {
  }

  onPanStart(e){
    this.animate = false;
    this.panStartLeft = this.left;
  }

  onPanMove(e){
    this.left = Math.min(0, this.panStartLeft + e.deltaX);
  }

  onPanEnd(e){
    this.animate = true;
    this.menuOpen = this.left < -ListItemTouchComponent.CARD_HEIGHT;
  }
}
