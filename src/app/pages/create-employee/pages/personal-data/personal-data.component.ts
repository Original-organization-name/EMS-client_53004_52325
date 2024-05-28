import { Component, inject } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { CountryService } from 'src/app/shared/services/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
})
export class EmsPersonalDataComponent {
  countries: any[] = [];
  paymentTypeOptions: any[] = [{ label: 'Cash', value: 'Cash' },{ label: 'Card', value: 'Card' }];

  protected selectedCountry: string | undefined;
  
  protected createService = inject(EmsCreateEmployeeService);
  protected countryService = inject(CountryService);

  private sub = new Subscription();

  config: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '300px',
    objectFit: 'contain',
    aspectRatio: 4 / 4,
    compressInitial: null,
  };
  
  ngOnInit() {
    this.countryService.getCountries().then(countries => {
        this.countries = countries;
    });

    this.sub.add(
      this.createService.personalForm.controls.paymentMethod.controls.type.valueChanges.subscribe(value => {
        const pmGroup = this.createService.personalForm.controls.paymentMethod.controls;
        if(value == 'Cash'){
          pmGroup.bankAccount.setValue(null);
          pmGroup.bankAccount.disable();
        }
        else{
          pmGroup.bankAccount.enable();
        }
      })
    )
  }

  onImageChanged(dataUri) {
    this.createService.imageSrc = dataUri;
  }
}
