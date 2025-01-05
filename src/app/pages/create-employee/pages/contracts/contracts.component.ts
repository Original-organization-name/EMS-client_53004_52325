import { Component, OnInit, inject } from '@angular/core';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { ContractType, DictionaryItemModel, OccupationCodeItemModel, OccupationDictService, PositionDictService, SalaryType, WorkplaceDictService } from 'src/app/services/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContractForm } from 'src/app/shared/forms/employee.forms';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
})
export class EmsContractsComponent implements OnInit {
  protected salaryTypes: any[] = [{ value: SalaryType.Monthly },{ value: SalaryType.Hourly }];

  protected createService = inject(EmsCreateEmployeeService);
  protected apiPositionService = inject(PositionDictService);
  protected apiOccupationCode = inject(OccupationDictService);
  protected apiWorkPlace = inject(WorkplaceDictService);

  protected contractsType: {label: string, value: ContractType}[] = [{
    label:'Employment contract', 
    value: ContractType.Employment
  }, {
    label:'Commission contract', 
    value: ContractType.Commission
  }, {
    label:'Specific-task contract',
    value: ContractType.SpecificTask
  }]

  protected positions: DictionaryItemModel[] = [];
  protected codes: OccupationCodeItemModel[] = [];
  protected workplaces: DictionaryItemModel[] = [];

  protected formGroup!: FormGroup<ContractForm>;

  ngOnInit(): void {
    if(this.createService.contractForm){
      this.formGroup = this.createService.contractForm;
    }
    else{
      this.formGroup = new FormGroup<ContractForm>({
        employmentDate: new FormControl<Date>(null, Validators.required),
        conclusionDate: new FormControl<Date>(null, Validators.required),
        positionItemId: new FormControl<string | null>(null),
        workplaceItemId: new FormControl<string | null>(null),
        occupationCodeItemId: new FormControl<string | null>(null),
        startDate: new FormControl<Date>(null, Validators.required),
        terminationDate: new FormControl<Date | null>(null),
        fteNumerator: new FormControl<number>(1, Validators.required),
        fteDenominator: new FormControl<number>(1, Validators.required),
        salary: new FormControl<number>(null, Validators.required),
        salaryType: new FormControl<SalaryType>(SalaryType.Monthly, Validators.required),
        contractType: new FormControl<ContractType>(ContractType.Employment, Validators.required),
      })

      const dateOfEmploymentEnter = this.formGroup.controls.employmentDate.valueChanges
        .subscribe(date => {
          if(!this.formGroup.controls.conclusionDate.value){
            this.formGroup.controls.conclusionDate.setValue(date);
          }
          dateOfEmploymentEnter.unsubscribe();
        })

      const change = this.formGroup.valueChanges
        .subscribe(_ => {
          this.createService.contractForm = this.formGroup;
          change.unsubscribe();
        });
    }

    const get$ = this.apiPositionService
      .apiPositionsGet()
      .subscribe(data => {
        this.positions = data;
        get$.unsubscribe();        
      });
    
    const getCode$ = this.apiOccupationCode
      .apiOccupationCodeGet()
      .subscribe(code => {
        this.codes = code;
        getCode$.unsubscribe();
      });
    
    const geTWorkPlace$ = this.apiWorkPlace
      .apiWorkplacesGet()
      .subscribe(place => {
        this.workplaces = place;
        geTWorkPlace$.unsubscribe();
      })
  }

  protected findOccupationCode(code: string) : OccupationCodeItemModel | undefined {
    return this.codes.find(x => x.code == code);
  }
  
}
