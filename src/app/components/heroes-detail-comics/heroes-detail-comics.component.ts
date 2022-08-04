import { Component, Input, OnInit } from '@angular/core';
import { MarvelImageSize } from 'src/app/enums/marvel-image-size.enum';

@Component({
  selector: 'app-heroes-detail-comics',
  templateUrl: './heroes-detail-comics.component.html',
  styleUrls: ['./heroes-detail-comics.component.scss'],
})
export class HeroesDetailComicsComponent implements OnInit {
  @Input() title = '';
  @Input() images: any[] = [];

  imageSize = MarvelImageSize.PORTRAIT_XLARGE;
  constructor() {}

  ngOnInit(): void {}
}
