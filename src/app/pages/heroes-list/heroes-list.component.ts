import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from 'src/app/services/marvel/marvel.service';
import { SubSink } from 'subsink';
import { ComponentsModule } from 'src/app/components/components.module';
import { MarvelHeroResponse } from 'src/app/model';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, OnDestroy {
  subsink = new SubSink();
  payload?: MarvelHeroResponse;

  constructor(private marvelService: MarvelService) {}
  ngOnInit(): void {
    this.search();
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  search(term: string = ''): void {
    this.subsink.sink = this.marvelService.search(term).subscribe((result) => {
      this.payload = result;
    });
  }
}
