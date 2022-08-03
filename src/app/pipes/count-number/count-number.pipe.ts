import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countNumber',
})
export class CountNumberPipe implements PipeTransform {

  transform(value: number, selected: number = 1): number[] {
    if (value < 3) return this.listOfLessMinimum(value);
    if (selected === 1) return this.listInit(selected);
    if (selected + 1 < value) return this.list(selected);
    return this.listEnd(value);
  }

  protected listOfLessMinimum(value: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < value; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  protected listInit(selected: number): number[] {
    const numbers: number[] = [];
    for (let i = selected - 1; i < 3; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  protected list(selected: number): number[] {
    return [selected - 1, selected, selected + 1];
  }

  protected listEnd(value: number): number[] {
    const numbers: number[] = [];
    for (let i = value - 2; i <= value; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
