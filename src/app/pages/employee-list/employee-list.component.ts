import { Component, inject } from '@angular/core';
import { EmployeeModel, EmployeesService } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  private apiSer = inject(EmployeesService);

  protected employees: EmployeeModel[] = [];

  ngOnInit(): void {
    this.apiSer.getAllEmployees()
    .subscribe(data => {
      this.employees = data;
    });
  }
}
