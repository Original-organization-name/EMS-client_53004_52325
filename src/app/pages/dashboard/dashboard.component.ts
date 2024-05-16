import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeShortInfoModel } from 'src/app/services/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class EmsDashboardComponent {
  protected employees: EmployeeShortInfoModel[] = [];

  constructor(private httpClient: HttpClient) {
       
  }

  ngOnInit() {
    this.httpClient.get<any>('assets/data/employees-small.json')
      .subscribe(res => this.employees = res.data as EmployeeShortInfoModel[])
  }
}
