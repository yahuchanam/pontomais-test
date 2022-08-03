import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent implements OnInit {
  @Input() pages = 20;
  @Input() selected = 1;
  @Output() change = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  back(): void {
    if (this.selected === 1) {
      return;
    }

    this.change.emit(--this.selected);
  }

  foward(): void {
    if (this.selected === this.pages) {
      return;
    }
    this.change.emit(++this.selected);
  }

  goto(page: number): void {
    if (this.selected === page) {
      return;
    }
    this.selected = page;
    this.change.emit(page);
  }
}
