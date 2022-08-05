import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from 'src/app/services/marvel/marvel.service';
import { SubSink } from 'subsink';
import { ComponentsModule } from 'src/app/components/components.module';
import { MarvelHeroResponse } from 'src/app/model';
import {
  IMarvelListRequest,
  MarvelListRequest,
} from 'src/app/model/marvel-list-request.interface';

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
  marvelListParams: IMarvelListRequest = {
    page: 1,
    term: '',
  };

  constructor(private marvelService: MarvelService) {}
  ngOnInit(): void {
    this.search();
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  changeTerm(term: string): void {
    this.marvelListParams = {
      term,
      page: 1,
    };
    this.search();
  }

  navigate(page: number): void {
    this.marvelListParams.page = page;
    this.search();
  }

  search(): void {
    console.log(this.marvelListParams);
    this.subsink.sink = this.marvelService
      .search(new MarvelListRequest(this.marvelListParams))
      .subscribe((result) => {
        this.payload = result;
      });
  }
}
