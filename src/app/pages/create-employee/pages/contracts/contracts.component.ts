import { Component, inject } from '@angular/core';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { DictionaryContractTypesModel } from 'src/app/services/api/model/contractType';
import { DictionaryItemModel, OccupationCodeItem, OccupationDictService, PositionDictService, WorkplaceDictService } from 'src/app/services/api';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
})
export class EmsContractsComponent {
  paymentSalaryTypeOptions: any[] = [{ label: 'Hourly', value: 'Hourly' },{ label: 'Monthly', value: 'Monthly' }];
  protected createService = inject(EmsCreateEmployeeService);
  protected apiPositionService = inject(PositionDictService);
  protected apiOccupationCode = inject(OccupationDictService);
  protected apiWorkPlace = inject(WorkplaceDictService);

  contractsType: {label: string}[] = [{label:'Employment contract'}, {label:'Commission contract'}, {label:'Specific-task contract'}]

  protected ContractsTypes: DictionaryContractTypesModel[] = [];

  protected positions: DictionaryItemModel[] = [];

  protected codes: OccupationCodeItem[] = [];

  protected places: DictionaryItemModel[] = [];

  ngOnInit(): void {
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
        this.places = place;
        geTWorkPlace$.unsubscribe();
      })
  }

  protected findOccupationCode(code: string) : OccupationCodeItem | undefined {
    return this.codes.find(x => x.code == code);
  }
  
}
