import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from 'src/app/services/marvel/marvel.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SubSink } from 'subsink';
import { MarvelHeroDetail } from 'src/app/model';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-heroes-detail',
  standalone: true,
  imports: [CommonModule, ComponentsModule, RouterModule],
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
})
export class HeroesDetailComponent implements OnInit {
  loading = true;
  subSink = new SubSink();
  heroDetail?: MarvelHeroDetail;

  constructor(
    private marvelService: MarvelService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subSink.sink = this.activatedRoute.params.subscribe((params) => {
      this.loadHeroDetail(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  loadHeroDetail(id: number): void {
    this.loading = true;
    this.marvelService.loadHeroById(id).subscribe((heroDetail) => {
      this.heroDetail = heroDetail;
      this.loading = false;
    });
  }
}
