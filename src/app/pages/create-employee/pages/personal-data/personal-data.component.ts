import { Component, inject } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
})
export class EmsPersonalDataComponent {
  countries: any[] = [];

  protected selectedCountry: string | undefined;
  
  protected createService = inject(EmsCreateEmployeeService);
  protected countryService = inject(CountryService);

  initialImage: string = '';
  imageSrc: any = '';

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
  }

  onImageChanged(dataUri) {
    this.imageSrc = dataUri;
    console.log(this.imageSrc)
  }
}
