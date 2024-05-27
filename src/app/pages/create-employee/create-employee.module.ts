import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsCreateEmployeeComponent } from './create-employee.component';
import { EmsCreateEmployeeService } from './services/create-employee.service';
import { EmsCreateEmployeeRoutingModule } from './create-employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { EmsPersonalDataComponent } from './pages/personal-data/personal-data.component';
import { EmsContractsComponent } from './pages/contracts/contracts.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    EmsCreateEmployeeRoutingModule,
	FormsModule,
	AutoCompleteModule,
	CalendarModule,
	ChipsModule,
	DropdownModule,
	InputMaskModule,
	InputNumberModule,
	CascadeSelectModule,
	MultiSelectModule,
	InputTextareaModule,
	InputTextModule,
	TabMenuModule,
	StepsModule,
	NgpImagePickerModule,
	RadioButtonModule,
	ReactiveFormsModule,
	NgxMaskDirective, NgxMaskPipe
  ],
  declarations: [
	EmsCreateEmployeeComponent,
	EmsPersonalDataComponent,
	EmsContractsComponent
  ],
  providers: [EmsCreateEmployeeService, provideNgxMask()]
})
export class EmsCreateEmployeeModule { }
