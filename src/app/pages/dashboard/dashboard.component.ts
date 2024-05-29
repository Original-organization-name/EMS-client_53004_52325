import { Component, inject } from '@angular/core';
import { DashboardService, EmployeeShortInfoModel } from 'src/app/services/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class EmsDashboardComponent {
  private apiService = inject(DashboardService);
  protected employees: EmployeeShortInfoModel[] = [];
  protected totalEmployeeCount: number = 0;
  protected addInLastMonth: number = 0;
  protected totalPayroll: number = 0;

  constructor() {
       
  }

  ngOnInit() {
    const get$ = this.apiService
      .apiDashboardGet()
      .subscribe(data => {
        this.totalEmployeeCount = data.totalEmployeeCount;
        this.addInLastMonth = data.addInLastMonth;
        this.totalPayroll = data.totalPayroll;
        this.employees = data.recentAddedEmployees ?? [];

        get$.unsubscribe();
      })
  }
}
