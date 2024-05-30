import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EmsCreateEmployeeService } from './services/create-employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validateAllFormFields } from 'src/app/shared/helpers/form.helpers';
import { CreateEmployeeModel, EmployeesService } from 'src/app/services/api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class EmsCreateEmployeeComponent {
  protected createService = inject(EmsCreateEmployeeService);
  protected employeeService = inject(EmployeesService);
  protected router = inject(Router);
  protected rout = inject(ActivatedRoute);
  items!: Array<MenuItem & {formGroup?: FormGroup}>;

  protected active: number = 0;

  nextPage() {
    if (!this.items[this.active].formGroup || this.items[this.active].formGroup.valid) {
        if(this.active + 1 < this.items.length){
          this.active += 1;
        }
        else{
          
        }
    }
    else {
      validateAllFormFields(this.items[this.active].formGroup);
    }
  }
  
  prevPage() {
    if(this.active - 1 >= 0){
      this.active -= 1;
    }
  }
  
  saveForm() {

    if(!this.createService.personalForm.valid){
      this.active = 0;
      validateAllFormFields(this.createService.personalForm);
    }
    else{
      const employeeData = this.createService.personalForm.getRawValue();
      const request: CreateEmployeeModel = {
        employee: {
          name: employeeData.name,
          surname: employeeData.surname,
          pesel: employeeData.pesel,
          nip: employeeData.nip,
          birthdate: employeeData.birthdate?.toISOString(),
          gender: employeeData.gender,
          address: employeeData.address,
          phoneNumber: employeeData.phoneNumber,
          email: employeeData.email,
          paymentMethod: employeeData.paymentMethod,
        },
        medicalExaminations: this.createService.medicalExams(),
        imageBase64: this.createService.imageSrc
      } 

      const add$ = this.employeeService
        .addEmployee(request)
        .subscribe(data => {
          
        })
      }
  }

  ngOnInit() {
    this.items = [
      { 
        label: 'Personal data', 
        formGroup: this.createService.personalForm
      },
      { 
        label: 'Contracts', 
        formGroup: this.createService.personalForm
      },
      { 
        label: 'Medical examinations',
      },
      { 
        label: 'Skills', 
      },
      { 
        label: 'Education', 
      },
      { 
        label: 'Employment history', 
      },
    ];
  }
}
