import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmsCreateEmployeeComponent } from './create-employee.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmsCreateEmployeeComponent }
    ])],
    exports: [RouterModule]
})
export class EmsCreateEmployeeRoutingModule { }
