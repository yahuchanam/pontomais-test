import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
