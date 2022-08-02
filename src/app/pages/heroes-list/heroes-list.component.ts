import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from 'src/app/services/marvel/marvel.service';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  providers: [MarvelService],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {}
}
