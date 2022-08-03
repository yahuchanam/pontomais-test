import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/heroes-list/heroes-list.component').then(
            (mod) => mod.HeroesListComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
