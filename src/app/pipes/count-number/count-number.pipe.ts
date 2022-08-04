import { HostListener, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countNumber',
})
export class CountNumberPipe implements PipeTransform {
  maxPage = 3;

  constructor() {
    this.onResize(new Event('window:resize'));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.maxPage = globalThis.innerWidth < 1024 ? 3 : 6;
  }

  transform(value: number, selected: number = 1): number[] {
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
