import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee, Gender } from 'src/app/services/api';

@Injectable()
export class EmsCreateEmployeeService {
  constructor() { }

  public personalForm = new FormGroup({
    name: new FormControl<string>("", Validators.required),
    surname: new FormControl<string>("", Validators.required),
    pesel: new FormControl(null),
    nip: new FormControl(null),
    birthdate: new FormControl<Date | null>(null),
    gender: new FormControl<Gender>(Gender.Male),
    phoneNumber: new FormControl(null),
    email: new FormControl(null),
  });

}
