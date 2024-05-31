import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EmsCreateEmployeeService } from './services/create-employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validateAllFormFields } from 'src/app/shared/helpers/form.helpers';
import { CreateEmployeeModel, EmployeesService } from 'src/app/services/api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  providers: [EmsCreateEmployeeService]
})
export class EmsCreateEmployeeComponent {
  protected createService = inject(EmsCreateEmployeeService);
  protected employeeService = inject(EmployeesService);
  protected router = inject(Router);
  protected rout = inject(ActivatedRoute);
  items!: Array<MenuItem & {getFormGroup?: () => FormGroup | undefined}>;

  protected active: number = 0;

  nextPage() {
    if (!this.items[this.active].getFormGroup || this.items[this.active].getFormGroup()?.valid != false) {
        if(this.active + 1 < this.items.length){
          this.active += 1;
        }
    }
    else if(this.items[this.active].getFormGroup){
      validateAllFormFields(this.items[this.active].getFormGroup());
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
      const contractDate = this.createService.contractForm?.getRawValue();
      
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

      if(contractDate){
        request.contract = {
          employmentDate: contractDate.employmentDate.toISOString(),
          conclusionDate: contractDate.conclusionDate.toISOString(),
          positionItemId: contractDate.positionItemId,
          workplaceItemId: contractDate.workplaceItemId,
          occupationCodeItemId: contractDate.occupationCodeItemId,
          startDate: contractDate.startDate.toISOString(),
          terminationDate: contractDate.terminationDate?.toISOString(),
          fteNumerator: contractDate.fteNumerator,
          fteDenominator: contractDate.fteDenominator,
          salary: contractDate.salary,
          salaryType: contractDate.salaryType,
          contractType: contractDate.contractType,
        }
      }

      const add$ = this.employeeService
        .addEmployee(request)
        .subscribe(data => {
          add$.unsubscribe();
        })
      }
  }

  ngOnInit() {
    this.items = [
      { 
        label: 'Personal data', 
        getFormGroup: () => this.createService.personalForm
      },
      { 
        label: 'Contracts', 
        getFormGroup: () => this.createService.contractForm
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
