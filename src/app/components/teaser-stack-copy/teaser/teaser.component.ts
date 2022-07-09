import { Component, Input } from '@angular/core';
import * as marked from 'marked';

export interface ITeaser {
  bgImage: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'ngx-sitemule-teaser-2',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
})
export class TeaserComponent {
  @Input() teaser: ITeaser;
}
