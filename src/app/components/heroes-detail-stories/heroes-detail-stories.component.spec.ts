import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailStoriesComponent } from './heroes-detail-stories.component';

describe('HeroesDetailStoriesComponent', () => {
  let component: HeroesDetailStoriesComponent;
  let fixture: ComponentFixture<HeroesDetailStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetailStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetailStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
