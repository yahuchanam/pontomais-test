import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { HeaderComponent } from './header/header.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { NoResultListComponent } from './no-result-list/no-result-list.component';
import { HeroesDetailHeaderComponent } from './heroes-detail-header/heroes-detail-header.component';
import { HeroesDetailWidgetComponent } from './heroes-detail-widget/heroes-detail-widget.component';
import { HeroesDetailComicsComponent } from './heroes-detail-comics/heroes-detail-comics.component';
import { HeroesDetailStoriesComponent } from './heroes-detail-stories/heroes-detail-stories.component';

@NgModule({
  declarations: [
    ListViewComponent,
    HeaderComponent,
    HeroSearchComponent,
    ContainerComponent,
    PageNavigatorComponent,
    NoResultListComponent,
    HeroesDetailHeaderComponent,
    HeroesDetailWidgetComponent,
    HeroesDetailComicsComponent,
    HeroesDetailStoriesComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PipesModule],
  exports: [
    ListViewComponent,
    HeaderComponent,
    HeroSearchComponent,
    ContainerComponent,
    PageNavigatorComponent,
    NoResultListComponent,
    HeroesDetailHeaderComponent,
    HeroesDetailWidgetComponent,
    HeroesDetailComicsComponent,
    HeroesDetailStoriesComponent,
  ],
})
export class ComponentsModule {}
