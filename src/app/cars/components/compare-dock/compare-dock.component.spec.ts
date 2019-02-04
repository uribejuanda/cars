import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDockComponent } from './compare-dock.component';

describe('CompareDockComponent', () => {
  let component: CompareDockComponent;
  let fixture: ComponentFixture<CompareDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
