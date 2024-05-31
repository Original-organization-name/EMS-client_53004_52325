import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app'] }
                ]
            },
            {
                label: 'Employees',
                items: [
                    { label: 'All', icon: 'pi pi-fw pi-user', routerLink: ['/app/employees'] },
                    { label: 'Create', icon: 'pi pi-fw pi-plus', routerLink: ['/app/employees/create'] }
                ]
            },
            {
                label: 'Dictionaries',
                items: [
                    { label: 'Medical examinations', icon: 'pi pi-fw pi-heart', routerLink: ['/app/medicalExams'] },
                    { label: 'Occupation code', icon: 'pi pi-fw pi-briefcase', routerLink: ['/app/occupationCodes'] },
                    { label: 'Positions', icon: 'pi pi-fw pi-briefcase', routerLink: ['/app/positions'] },
                    { label: 'Qualifications', icon: 'pi pi-fw pi-sitemap', routerLink: ['/app/qualifications'] },
                    { label: 'Workplaces', icon: 'pi pi-fw pi-map-marker', routerLink: ['/app/workplaces'] },
                ]
            },
        ];
    }
}
