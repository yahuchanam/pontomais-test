import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel/marvel.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  search = new FormControl<string>('');
  subSink = new SubSink();

  @Output() change = new EventEmitter<string>();

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.subSink.sink = this.search.valueChanges
      .pipe(
        map((value) => (value === null ? '' : value.trim())),
        filter((term) => term.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((term) => {
        this.change.emit(term);
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
