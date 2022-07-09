import { Component } from '@angular/core';

export interface IHeroInfo {
  title: string;
  description: string;
  contentPosition: string;
  fullPageWidth: boolean;
  backgroundImage: IBackgroundImage;
  links?: ILink[];
}

export interface IBackgroundImage {
  url: string;
  position: string;
  size: string;
  fullPageWidth: boolean;
}

export interface ILink {
  label: string;
  href: string;
  target: string;
  size: string;
  theme: string;
  stroked: boolean;
}

@Component({
  selector: 'ngx-sitemule-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heroInfo: IHeroInfo = {
    title: 'Få gode råd om valg af det rigtige værktøj',
    description:
      'Om du har brug for hjælp til at vælge det rigtige værktøj eller et godt råd til en svær opgave, så er vi klar til at stille vores viden til rådighed for dig, så du får det helt rigtige udstyr til din opgave.',
    contentPosition: 'left',
    fullPageWidth: true,
    backgroundImage: {
      url: 'https://www.folkelarsen.dk/cms-media/page/hero-frontpage.jpg',
      position: 'center top',
      size: 'cover',
      fullPageWidth: true,
    },
    links: [
      {
        label: 'SE VORES PRODUKTER',
        href: 'https://www.folkelarsen.dk/page1',
        target: '_blank',
        size: 'lg',
        theme: 'success',
        stroked: false,
      },
    ],
  };

  constructor() {}
}
