import { Component, Input } from '@angular/core';
import { MarvelImageSize } from 'src/app/enums/marvel-image-size.enum';
import { MarvelHero } from 'src/app/model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  @Input() heroes: MarvelHero[] = [];
  imageSize = MarvelImageSize.MEDIUM;
  columns = ['' /*Image*/, 'Nome', 'Personagem', 'Séries', 'Eventos'];
  constructor() {}
}
