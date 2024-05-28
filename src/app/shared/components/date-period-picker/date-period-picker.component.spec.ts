import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsDatePeriodPickerComponent } from './date-period-picker.component';

describe('DatePeriodPickerComponent', () => {
  let component: EmsDatePeriodPickerComponent;
  let fixture: ComponentFixture<EmsDatePeriodPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmsDatePeriodPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmsDatePeriodPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
