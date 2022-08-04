import { Component, Input, OnInit } from '@angular/core';
import { MarvelStories } from 'src/app/model';

@Component({
  selector: 'app-heroes-detail-stories',
  templateUrl: './heroes-detail-stories.component.html',
  styleUrls: ['./heroes-detail-stories.component.scss'],
})
export class HeroesDetailStoriesComponent implements OnInit {
  @Input() stories: MarvelStories[] = [];
  constructor() {}

  ngOnInit(): void {}
}
