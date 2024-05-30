import { Component, inject } from '@angular/core';
import * as moment from 'moment';
import { EmployeeTableInfo, EmployeesService, Status } from 'src/app/services/api';
import { environment } from 'src/environments/environment';

let startContractDate: Date = new Date(2024, 4, 17);

@Component({
  
  selector: 'app-table',
  templateUrl: './table.component.html',
})
  
export class EsmTableComponent {
  private apiService = inject(EmployeesService);
  protected employees: EmployeeTableInfo [] = []; 
  

  ngOnInit(): void {
    const get$ = this.apiService
    .getAllEmployees()
    .subscribe(data =>
    {
      this.employees = data;
      get$.unsubscribe();
    })
  }

  public getImagePath(imageName: string){
    return imageName ? `${environment.apiPath}/api/images/${imageName}` : 'assets/images/employee.png';
  }

  public getStatusByDate(date?: string){
    if(moment().isAfter(date))
    {
      return Status.Ended;
    }

    if(moment().add(14, 'd').isSameOrBefore(date)){
      return Status.Actual;
    }

    return Status.Ending;
  }
}

