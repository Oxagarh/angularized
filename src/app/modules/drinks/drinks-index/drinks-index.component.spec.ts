import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksIndexComponent } from './drinks-index.component';

describe('DrinksIndexComponent', () => {
  let component: DrinksIndexComponent;
  let fixture: ComponentFixture<DrinksIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
