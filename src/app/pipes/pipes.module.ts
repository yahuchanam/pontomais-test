import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelImagePipe } from '../pipes/marvel-image/marvel-image.pipe';

@NgModule({
  declarations: [MarvelImagePipe],
  imports: [CommonModule],
  exports: [MarvelImagePipe],
})
export class PipesModule {}
