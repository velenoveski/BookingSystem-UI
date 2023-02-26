import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingResourceDialogComponent } from './booking-resource-dialog.component';

describe('BookingResourceDialogComponent', () => {
  let component: BookingResourceDialogComponent;
  let fixture: ComponentFixture<BookingResourceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingResourceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
