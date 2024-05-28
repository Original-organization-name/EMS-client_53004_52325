import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-date-period-picker',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule],
  templateUrl: './date-period-picker.component.html',
  styleUrl: './date-period-picker.component.scss'
})
export class EmsDatePeriodPickerComponent {
  @Input({required: true}) fromControl: FormControl<Date>;
  @Input({required: true}) toControl: FormControl<Date | null>;
}
