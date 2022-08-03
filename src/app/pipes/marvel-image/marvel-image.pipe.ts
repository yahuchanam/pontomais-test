import { Pipe, PipeTransform } from '@angular/core';
import { MarvelImageSize } from 'src/app/enums/marvel-image-size.enum';
import { MarvelImageThumb } from 'src/app/model';

@Pipe({
  name: 'marvelImage',
})
export class MarvelImagePipe implements PipeTransform {

  transform(value: MarvelImageThumb, size: MarvelImageSize): string {
    return `${value.path}/${size}.${value.extension}`;
  }
}
