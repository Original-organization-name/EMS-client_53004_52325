import { Component, inject } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { EmsCreateEmployeeService } from '../../services/create-employee.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
})
export class EmsPersonalDataComponent {
  protected createService = inject(EmsCreateEmployeeService);

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
  
  onImageChanged(dataUri) {
    this.imageSrc = dataUri;
    console.log(this.imageSrc)
  }
}
