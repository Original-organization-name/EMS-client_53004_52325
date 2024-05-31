import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { EmployeeTableInfo, EmployeesService, Status } from 'src/app/services/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [MessageService]
})
  
export class EsmTableComponent {
  private apiService = inject(EmployeesService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  protected employees: EmployeeTableInfo [] = []; 
  protected deleteEmployeeDialog: boolean = false;
  protected deleteEmployeesDialog: boolean = false;
  protected employee?: EmployeeTableInfo ;

  cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'position', header: 'Position' },
    { field: 'contractType', header: 'Contract Type' },
    { field: 'contractStartDate', header: 'Start of Contract' },
    { field: 'terminationDate', header: 'End of Contract' },
    { field: 'salary', header: 'Salary' },
    { field: 'bhpStatus', header: 'BHP training status' },
    { field: 'medicalExamStatus', header: 'Medical exams status' },
  ];

  selectedEmployees: EmployeeTableInfo[] = [];

  ngOnInit(): void {
    const get$ = this.apiService
    .getAllEmployees()
    .subscribe(data =>
    {
      this.employees = data;
      get$.unsubscribe();
    })
  }

  protected addClick() {
    this.router.navigate(['/app', 'employees', 'create'])
  }

  public getImagePath(imageName: string){
    return imageName ? `${environment.apiPath}/api/images/${imageName}` : 'assets/images/employee.png';
  }

  deleteEmployee(employee: EmployeeTableInfo) {
    this.deleteEmployeeDialog = true;
    this.employee = { ...employee };
  }

  deleteSelectedEmployees() {
    this.deleteEmployeesDialog = true;
  }

  confirmDeleteSelected() {
    this.selectedEmployees.forEach(element => {
      const delete$ = this.apiService
        .deleteEmployee(element.id)
        .subscribe(data => {
          delete$.unsubscribe();
        })
    });

    this.deleteEmployeesDialog = false;
    this.employees = this.employees.filter(val => !this.selectedEmployees.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000 });
    this.selectedEmployees = [];
  }

  confirmDelete() {
    const delete$ = this.apiService
      .deleteEmployee(this.employee.id)
      .subscribe(data => {
        this.deleteEmployeeDialog = false;
        this.employees = this.employees.filter(val => val.id !== this.employee.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000 });
        this.employee = undefined;
        delete$.unsubscribe();
      })
  }


  public getStatusByDate(date?: string){
    if(moment().isAfter(date))
    {
      return Status.Ended;
    }

    if(!date || moment().add(14, 'd').isSameOrBefore(date)){
      return Status.Actual;
    }

    return Status.Ending;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}

