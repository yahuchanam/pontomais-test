import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailHeaderComponent } from './heroes-detail-header.component';

describe('HeroesDetailHeaderComponent', () => {
  let component: HeroesDetailHeaderComponent;
  let fixture: ComponentFixture<HeroesDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetailHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
