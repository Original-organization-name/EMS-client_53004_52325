import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, MedicalExamination, PaymentType, Training } from 'src/app/services/api';
import { ContractType } from 'src/app/services/api/model/contractType';
import { ContractForm } from 'src/app/shared/forms/employee.forms';


@Injectable()
export class EmsCreateEmployeeService {
  constructor() { }

  public imageSrc: any = '';

  public medicalExams = signal<MedicalExamination[]>([]);
  public trainings = signal<Training[]>([]);
  public contractForm?: FormGroup<ContractForm>;

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
}
