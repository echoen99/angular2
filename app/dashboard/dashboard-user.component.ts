import { Component } from '@angular/core';
import { IDashboardUser } from './dashboard-user';

@Component({
    moduleId: module.id,
    selector: 'cs-dashboard-user',
    templateUrl: 'dashboard-user.component.html'
})

export class DashboardUserComponent {
    public dashboardUser:IDashboardUser;
}