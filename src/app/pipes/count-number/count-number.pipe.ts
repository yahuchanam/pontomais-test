import { HostListener, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countNumber',
})
export class CountNumberPipe implements PipeTransform {
  maxPage = 3;

  constructor() {}

  transform(value: number, maxPage = 3, selected: number = 1): number[] {
    this.maxPage = maxPage;
    if (value < this.maxPage) return this.listOfLessMinimum(value);
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
    for (let i = selected - 1; i < this.maxPage; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  protected list(selected: number): number[] {
    return this.maxPage === 3
      ? [selected - 1, selected, selected + 1]
      : [
          selected - 1,
          selected,
          selected + 1,
          selected + 2,
          selected + 3,
          selected + 4,
        ];
  }

  protected listEnd(value: number): number[] {
    const numbers: number[] = [];
    for (let i = value - (this.maxPage - 1); i <= value; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
