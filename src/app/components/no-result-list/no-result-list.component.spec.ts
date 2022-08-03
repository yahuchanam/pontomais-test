import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultListComponent } from './no-result-list.component';

describe('NoResultListComponent', () => {
  let component: NoResultListComponent;
  let fixture: ComponentFixture<NoResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
