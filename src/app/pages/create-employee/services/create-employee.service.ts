import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, MedicalExamination, PaymentType, SalaryType, Training, TrainingDictService } from 'src/app/services/api';
import { ContractType } from 'src/app/services/api/model/contractType';

@Injectable()
export class EmsCreateEmployeeService {
  constructor() { }

  public imageSrc: any = '';

  public medicalExams = signal<MedicalExamination[]>([]);
  public trainingComponent = signal<Training[]>([]);

  public personalForm = new FormGroup({
    name: new FormControl<string>("", Validators.required),
    surname: new FormControl<string>("", Validators.required),
    pesel: new FormControl<string | null>(null),
    nip: new FormControl(null),
    birthdate: new FormControl<Date | null>(null),
    gender: new FormControl<Gender>(Gender.Male),
    phoneNumber: new FormControl(null),
    email: new FormControl(null, Validators.email),
    address: new FormGroup({
      country:  new FormControl<{ name: string, code: string }>(null),
      city:  new FormControl<string | null>(null),
      district:  new FormControl<string | null>(null),
      postCode:  new FormControl<string | null>(null),
      street:  new FormControl<string | null>(null),
      houseNumber:  new FormControl<string | null>(null),
      flatNumber:  new FormControl<string | null>(null)
    }),
    paymentMethod: new FormGroup({
      type:  new FormControl<PaymentType>('Card'),
      bankAccount:  new FormControl<string | null>(null)
    }),
  });

  public contractForm = new FormGroup({
    employmentDate: new FormControl<Date>(new Date),
    conclusionDate: new FormControl<Date>(new Date),
    positionItemId: new FormControl<string | null>(null),
    workplaceItemId: new FormControl<string | null>(null),
    occupationCodeItemId: new FormControl<string | null>(null),
    startDate: new FormControl<Date>(new Date),
    terminationDate: new FormControl<Date>(new Date),
    fteNumerator: new FormControl<Number>(new Number),
    fteDenominator: new FormControl<Number>(new Number),
    salary: new FormControl<Number>(new Number),
    paymentSalaryTypeOptions: new FormGroup({
      type:  new FormControl<SalaryType>('Hourly'),
      type2:  new FormControl<SalaryType>('Monthly'),
    }),
    contractsType: new FormControl({
      contractType1: new FormControl<ContractType>('Employment contract'),
      contractType2: new FormControl<ContractType>('Commission contract'),
      contractType3: new FormControl<ContractType>('Specific-task contract'),
    }),
    workPlace: new FormControl<string>(null),
  });
}
