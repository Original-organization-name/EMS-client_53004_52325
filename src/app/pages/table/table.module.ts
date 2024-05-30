import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { EsmTableRouting } from './table-routing.module';
import { EsmTableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, FormsModule, TableModule, EsmTableRouting],
  declarations: [EsmTableComponent],
})
export class EsmTableModule {}
