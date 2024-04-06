import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment.development';

export const BASE_PATH = new InjectionToken<string>('basePath', {
    providedIn: 'root',
    factory: () => environment.apiPath
});

export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
