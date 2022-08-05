import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent implements OnInit {
  @Input() pages = 1;
  @Input() selected = 1;
  @Output() change = new EventEmitter<number>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.maxPage = globalThis.innerWidth < 1024 ? 3 : 6;
  }

  maxPage = 3;

  constructor() {
    this.onResize(new Event('window:resize'));
  }

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
