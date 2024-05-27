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
    pesel: "03281500978",
    jobPosition: 'C# development',
    startContractDate: new Date(2021, 12, 12),
    endContractDate: new Date(2021, 12, 12),
    salary: 400,
    salaryType: "month",
    fteNumerator: 1,
    fteDenumerator: 1,
  },
    {
    fullName: 'Lol Lmao',
    pesel: "03281500978",
    jobPosition: 'C# development',
    startContractDate: new Date(2021, 12, 12),
    endContractDate: new Date(2021, 1, 12),
    salary: 300,
    salaryType: "hour",
    fteNumerator: 1,
    fteDenumerator: 1,
    }]; 
  
}

