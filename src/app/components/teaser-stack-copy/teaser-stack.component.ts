import { Component, Input, OnInit } from '@angular/core';

import { navigateTo } from '../../../core/public-api';

export interface ITeaser {
  bgImage: string;
  title: string;
  subTitle: string;
}
interface ITeaserStack {
  title: string;
  columnCount: number;
  teaser: ITeaser[];
}

interface ITeaserStackInput {}
@Component({
  selector: 'ngx-sitemule-teaser-stack-2',
  templateUrl: './teaser-stack.component.html',
  styleUrls: ['./teaser-stack.component.scss'],
})
export class TeaserStackComponent implements OnInit {
  teaserStack: ITeaserStack;

  constructor() {}
  ngOnInit() {}
}
