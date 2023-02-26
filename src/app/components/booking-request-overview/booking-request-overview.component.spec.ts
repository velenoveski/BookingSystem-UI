import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestOverviewComponent } from './booking-request-overview.component';

describe('BookingRequestOverviewComponent', () => {
  let component: BookingRequestOverviewComponent;
  let fixture: ComponentFixture<BookingRequestOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
