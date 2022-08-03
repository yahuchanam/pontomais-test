import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { HeaderComponent } from './header/header.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListViewComponent,
    HeaderComponent,
    HeroSearchComponent,
    ContainerComponent,
    PageNavigatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListViewComponent,
    HeaderComponent,
    HeroSearchComponent,
    ContainerComponent,
    PageNavigatorComponent
  ]
})
export class ComponentsModule { }
