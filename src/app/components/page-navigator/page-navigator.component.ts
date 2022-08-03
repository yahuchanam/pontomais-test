import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent implements OnInit {
  pages = 3;
  selected = 1;
  @Output() change = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  back(): void {
    if (this.selected === 1) {
      return;
    }

    this.change.emit(this.selected - 1);
  }

  foward(): void {
    this.change.emit(this.selected + 1);
  }

  goto(page: number): void {
    if (this.selected === page) {
      return;
    }

    this.change.emit(page);
  }
}
