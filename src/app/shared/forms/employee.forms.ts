import { FormControl } from "@angular/forms"
import { Gender } from "src/app/services/api";

export type EmployeeForm = {
    name: FormControl<string>;
    surname: FormControl<string>;
    pesel: FormControl<string | null>;
    nip: FormControl<string | null>;
    birthdate: FormControl<Date | null>;
    gender: FormControl<Gender>;
    address: FormControl<>;
    phoneNumber: FormControl<string | null>;
    email: FormControl<string | null>;
    paymentMethod: FormControl<>;
}