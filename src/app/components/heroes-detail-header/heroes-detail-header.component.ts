import { Component, Input, OnInit } from '@angular/core';
import { MarvelImageSize } from 'src/app/enums/marvel-image-size.enum';
import { MarvelHero, Metric } from 'src/app/model';

@Component({
  selector: 'app-heroes-detail-header',
  templateUrl: './heroes-detail-header.component.html',
  styleUrls: ['./heroes-detail-header.component.scss'],
})
export class HeroesDetailHeaderComponent implements OnInit {
  @Input() hero?: MarvelHero;
  @Input() metrics?: Metric[] = [];
  imageSize = MarvelImageSize.PORTRAIT_UNCANNY;

  constructor() {}

  ngOnInit(): void {}
}
