import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'app', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.EmsDashboardModule) },
            { 
                path: 'employees', 
                children: [
                  { path: '', loadChildren: () => import('./pages/table/table.module').then(m => m.EsmTableModule) },
                  { path: 'create', loadChildren: () => import('./pages/create-employee/create-employee.module').then(m => m.EmsCreateEmployeeModule) },
                ]
              },
        ]
      },
        { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
