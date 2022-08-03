import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelImagePipe } from '../pipes/marvel-image/marvel-image.pipe';
import { CountNumberPipe } from './count-number/count-number.pipe';

@NgModule({
  declarations: [MarvelImagePipe, CountNumberPipe],
  imports: [CommonModule],
  exports: [MarvelImagePipe, CountNumberPipe],
})
export class PipesModule {}
