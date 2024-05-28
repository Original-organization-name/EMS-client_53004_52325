import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/services/api';

@Injectable()
export class EmsCreateEmployeeService {
  constructor() { }

  public imageSrc: any = '';

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
    })
  });

}
