import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkModalComponent } from './drink-modal.component';

describe('DrinkModalComponent', () => {
  let component: DrinkModalComponent;
  let fixture: ComponentFixture<DrinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
