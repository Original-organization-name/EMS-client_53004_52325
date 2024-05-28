import { FormGroup, FormControl, FormArray } from "@angular/forms";

export function validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        for (let arrayFormGroup of control.controls)
          validateAllFormFields(arrayFormGroup as FormGroup);
      }
    });
  }