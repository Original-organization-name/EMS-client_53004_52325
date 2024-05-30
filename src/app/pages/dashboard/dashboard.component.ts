import { Component, inject } from '@angular/core';
import { DashboardService, EmployeeShortInfoModel } from 'src/app/services/api';
import { environment } from 'src/environments/environment';

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
  protected activeContractsCount: number = 0;
  protected expiresContractCount: number = 0;

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
        this.activeContractsCount = data.activeContractsCount;
        this.expiresContractCount = data.expiresContractCount;

        get$.unsubscribe();
      })
  }

  public getImagePath(imageName: string){
    return imageName ? `${environment.apiPath}/api/images/${imageName}` : 'assets/images/employee.png';
  }
}
