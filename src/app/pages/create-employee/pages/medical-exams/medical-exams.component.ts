import { Component, inject } from '@angular/core';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DictionaryItemModel, MedicalExaminationDictService } from 'src/app/services/api';

@Component({
  selector: 'app-medical-exams',
  templateUrl: './medical-exams.component.html',
})
export class EmsMedicalExamsComponent {
  protected createService = inject(EmsCreateEmployeeService);
  protected medicalExamService = inject(MedicalExaminationDictService);

  protected medicalExamDict: DictionaryItemModel[] = [];

  protected formGroup: FormGroup<{
    medicalExamItemId: FormControl<string>,
    executionDate: FormControl<Date>,
    expirationDate: FormControl<Date | null>,
  }>

  protected newTypeTitle = new FormControl<string>("", Validators.required);

  ngOnInit(): void {
    this.createFormGroup();

    this.getMedicalExamDict();
  }

  protected createFormGroup(){
    this.formGroup = new FormGroup({
      medicalExamItemId: new FormControl<string>("", Validators.required),
      executionDate: new FormControl<Date>(null, Validators.required),
      expirationDate: new FormControl<Date | null>(null),
    })
  }

  protected add(){
    const value = this.formGroup.getRawValue();
    this.createService.medicalExams.update(items => [...items, {
      medicalExamItemId: value.medicalExamItemId,
      executionDate: value.executionDate.toISOString(),
      expirationDate: value.expirationDate?.toISOString()
    }]);

    this.createFormGroup();
  }

  protected getMedicalExamDict(){
    const get$ = this.medicalExamService
      .apiExaminationsGet()
      .subscribe(items => {
        this.medicalExamDict = items;
        get$.unsubscribe();
      });
  }

  protected addMedicalExamType(){
    if(this.newTypeTitle.valid){
      const add$ = this.medicalExamService
        .apiExaminationsPost({value: this.newTypeTitle.value})
        .subscribe(item => {
          this.newTypeTitle = new FormControl<string>("", Validators.required);
          this.getMedicalExamDict();
          add$.unsubscribe();
        })
    }
    else{
      this.newTypeTitle.markAsDirty({ onlySelf: true });
    }
  }

  protected finTypeById(medicalExamItemId: string){
    return this.medicalExamDict.find(x => x.id == medicalExamItemId)
  }
}
