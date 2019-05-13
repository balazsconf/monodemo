import {Component, Input, OnInit} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";

@Component({
  selector: 'monodemo-list-item-shared',
  templateUrl: './list-item-shared.component.html',
  styleUrls: ['./list-item-shared.component.scss']
})
export class ListItemSharedComponent implements OnInit {

  @Input() launch: Launch;

  constructor() { }

  ngOnInit() {
  }

  formatNumber(n: number): string{
    return n < 10 ? '0' + n : n.toString();
  }

  getDate(date: string): string{
    const d = new Date(date);
    return `${this.formatNumber(d.getDate())}/${this.formatNumber(d.getMonth())}/${d.getFullYear()}`;
  }

  getTime(date: string): string{
    const d = new Date(date);
    return `${this.formatNumber(d.getHours())}:${this.formatNumber(d.getMinutes())}`;
  }

}
