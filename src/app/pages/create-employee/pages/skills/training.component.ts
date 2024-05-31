import { Component, inject } from '@angular/core';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DictionaryItemModel, TrainingDictService } from 'src/app/services/api';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
})
export class EmsTrainingComponent {
  protected apiTrainingDict = inject(TrainingDictService);
  protected createTrainingService = inject(EmsCreateEmployeeService);

  protected trainings: DictionaryItemModel[] = [];

  protected newTypeTitle = new FormControl<string>("")

  protected formGroupTraining = new FormGroup({
    trainingItemId: new FormControl<string>(null),
    executionDate: new FormControl<Date>(new Date),
    expirationDate: new FormControl<Date | null>(null),
  })
  
  ngOnInit(): void {
    const getTraining$ = this.apiTrainingDict
      .apiTrainingsGet()
      .subscribe(value => {
        this.trainings = value;
        getTraining$.unsubscribe();
      });
    
    this.createTrainingFormGroup();

    this.apiTrainingDict;
  }

  protected createTrainingFormGroup() {
    this.formGroupTraining = new FormGroup({
      trainingItemId: new FormControl<string>(null),
      executionDate: new FormControl<Date | null>(null),
      expirationDate: new FormControl<Date | null>(null),
    })
  }

  protected add() {
    const value = this.formGroupTraining.getRawValue();
    this.createTrainingService.trainings.update(items => [...items, {
      trainingItemId: value.trainingItemId,
      executionDate: value.executionDate.toISOString(),
      expirationDate: value.expirationDate?.toISOString()
    }]);

    this.createTrainingFormGroup();
  }

  protected getTrainingDict(){
    const get$ = this.apiTrainingDict
      .apiTrainingsGet()
      .subscribe(items => {
        this.trainings = items;
        get$.unsubscribe();
      });
  }

  protected addTrainingType(){
    if(this.newTypeTitle.valid){
      const add$ = this.apiTrainingDict
        .apiTrainingsPost({value: this.newTypeTitle.value})
        .subscribe(item => {
          this.newTypeTitle = new FormControl<string>("", Validators.required);
          this.getTrainingDict();
          add$.unsubscribe();
        })
    }
    else{
      this.newTypeTitle.markAsDirty({ onlySelf: true });
    }
  }

  protected findTypeById(trainingItemId: string){
    return this.trainings.find(x => x.id == trainingItemId)
  }
} 
