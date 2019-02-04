import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardDetailedComponent } from './car-card-detailed.component';

describe('CarCardDetailedComponent', () => {
  let component: CarCardDetailedComponent;
  let fixture: ComponentFixture<CarCardDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCardDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
