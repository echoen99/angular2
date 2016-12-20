import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cs-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    public pageTitle: string = "Cases Dashboard";
}