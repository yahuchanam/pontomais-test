import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailWidgetComponent } from './heroes-detail-widget.component';

describe('HeroesDetailWidgetComponent', () => {
  let component: HeroesDetailWidgetComponent;
  let fixture: ComponentFixture<HeroesDetailWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDetailWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
