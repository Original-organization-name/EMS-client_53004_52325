import { Component, OnInit } from '@angular/core';
import { EmployeeListData } from 'src/app/modules/employee-list-data/employee-list-data.component';

let startContractDate: Date = new Date(2024, 4, 17);


@Component({
  
  selector: 'app-table',
  templateUrl: './table.component.html',
})
  
export class EsmTableComponent {
  
  employees: EmployeeListData [] = [{
    fullName: 'Vova Yakoren',
    status: 'student',
    jobPosition: 'C# development',
    startContractDate: new Date(2021, 12, 12),
    endContractDate: new Date(2021, 12, 12),
    contractRate: 400,
    verified: true,
  },
    {
    fullName: 'Lol Lmao',
    status: 'student',
    jobPosition: 'C# development',
    startContractDate: new Date(2021, 12, 12),
    endContractDate: new Date(2021, 1, 12),
    contractRate: 300,
    verified: true,
    }]; 
  
}

