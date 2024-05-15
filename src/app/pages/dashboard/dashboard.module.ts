import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsDashboardComponent } from './dashboard.component';
import { EmsDashboardsRoutingModule } from './dashboard-routing.module';



@NgModule({
  imports: [
    CommonModule,
    EmsDashboardsRoutingModule
  ],
  declarations: [
    EmsDashboardComponent],
})
export class EmsDashboardModule { }
