import {Component, Input, OnInit} from '@angular/core';
import {Launch} from "@monodemo/graphql-schema";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'monodemo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  _lounch: Launch;

  @Input()
  set launch (value: Launch){
    this._lounch = value;
    console.log(this._lounch)
  };
  get launch (): Launch {
    return this._lounch;
  }

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  formatNumber(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

  formatBoolean(b: any): string {
    switch (b) {
      case true:
      case 'true':
        return 'yes';
      case false:
      case 'false':
        return 'no';
      default:
        return null;
    }
  }


  getDate(date: string): string {
    const d = new Date(date);
    return `${this.formatNumber(d.getDate())}/${this.formatNumber(d.getMonth())}/${d.getFullYear()}`;
  }

  getTime(date: string): string {
    const d = new Date(date);
    return `${this.formatNumber(d.getHours())}:${this.formatNumber(d.getMinutes())}`;
  }

  getVideoUrl() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.launch.mission.video}`);
  }
}
