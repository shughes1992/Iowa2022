import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideRoadTripComponent } from './inside-road-trip.component';

describe('InsideRoadTripComponent', () => {
  let component: InsideRoadTripComponent;
  let fixture: ComponentFixture<InsideRoadTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideRoadTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideRoadTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
