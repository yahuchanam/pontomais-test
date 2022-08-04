import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailComicsComponent } from './heroes-detail-comics.component';

describe('HeroesDetailComicsComponent', () => {
  let component: HeroesDetailComicsComponent;
  let fixture: ComponentFixture<HeroesDetailComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetailComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetailComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
