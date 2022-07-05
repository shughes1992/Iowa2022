import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTripComponent } from './road-trip.component';

describe('RoadTripComponent', () => {
  let component: RoadTripComponent;
  let fixture: ComponentFixture<RoadTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
