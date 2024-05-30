import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EsmTableComponent } from './table.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: EsmTableComponent }]),
  ],
  exports: [RouterModule],
})
export class EsmTableRouting {}
