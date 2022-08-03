import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countNumber',
})
export class CountNumberPipe implements PipeTransform {
  transform(value: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < value; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }
}
