import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmsDashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmsDashboardComponent }
    ])],
    exports: [RouterModule]
})
export class EmsDashboardsRoutingModule { }
