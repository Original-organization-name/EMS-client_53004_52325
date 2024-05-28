import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EmsCreateEmployeeService } from './services/create-employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validateAllFormFields } from 'src/app/shared/helpers/form.helpers';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class EmsCreateEmployeeComponent {
  protected createService = inject(EmsCreateEmployeeService);
  protected router = inject(Router);
  protected rout = inject(ActivatedRoute);
  items!: Array<MenuItem & {formGroup?: FormGroup}>;

  protected active: number = 2;

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
