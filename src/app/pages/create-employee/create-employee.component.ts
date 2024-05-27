import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EmsCreateEmployeeService } from './services/create-employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class EmsCreateEmployeeComponent {
  protected createService = inject(EmsCreateEmployeeService);
  protected router = inject(Router);
  protected rout = inject(ActivatedRoute);
  items!: Array<MenuItem & {formGroup: FormGroup}>;

  protected active: number = 0;

  nextPage() {
    if (this.items[this.active].formGroup.valid) {
        if(this.active + 1 < this.items.length){
          this.active += 1;
        }
        else{

        }
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
        formGroup: this.createService.personalForm
      },
      { 
        label: 'Skills', 
        formGroup: this.createService.personalForm
      },
      { 
        label: 'Education', 
        formGroup: this.createService.personalForm
      },
      { 
        label: 'Employment history', 
        formGroup: this.createService.personalForm 
      },
    ];
  }
}
