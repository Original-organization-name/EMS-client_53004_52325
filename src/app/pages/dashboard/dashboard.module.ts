import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsDashboardComponent } from './dashboard.component';
import { EmsDashboardsRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    EmsDashboardsRoutingModule,
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
  ],
  declarations: [
    EmsDashboardComponent]
})
export class EmsDashboardModule { }
