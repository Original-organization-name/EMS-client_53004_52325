import { Component, inject } from '@angular/core';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DictionaryItemModel, MedicalExaminationDictService, TrainingDictService, TrainingModel } from 'src/app/services/api';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
})
export class EmsTrainingComponent {
  protected apiTrainingDict = inject(TrainingDictService);
  protected createService = inject(EmsCreateEmployeeService);

  protected trainings: DictionaryItemModel[] = [];

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
    this.createService.trainingComponent.update(items => [...items, {
      trainingItemId: value.trainingItemId,
      executionDate: value.executionDate.toISOString(),
      expirationDate: value.expirationDate?.toISOString()
    }]);

    this.createTrainingFormGroup();
  }
} 
