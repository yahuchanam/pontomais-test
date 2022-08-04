import { Component, Input, OnInit } from '@angular/core';
import { Metric } from 'src/app/model';

@Component({
  selector: 'app-heroes-detail-widget',
  templateUrl: './heroes-detail-widget.component.html',
  styleUrls: ['./heroes-detail-widget.component.scss'],
})
export class HeroesDetailWidgetComponent implements OnInit {
  @Input() metric: Metric = {
    name: '',
    value: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
