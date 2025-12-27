import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { PanelService, MenuItem } from '../services/panel.service';
import { BackendUser } from '../models/backend-user';

@Component({
    selector: 'app-panel-control',
    templateUrl: './panel-control.component.html',
    styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
    currentUser: BackendUser;
    menuItems: MenuItem[] = [];
    sidebarOpen = true;

    constructor(
        private backendService: BackendService,
        private panelService: PanelService,
        private router: Router
    ) { }

    ngOnInit() {
        this.currentUser = this.backendService.currentUserValue;
        // Basic auth check
        if (!this.currentUser) {
            this.router.navigate(['/login']);
            return;
        }

        this.panelService.getMenuItems(this.currentUser.group_id).subscribe(items => {
            if (this.currentUser.group_id == 4) {
                // Only show "Jugadores" and redirect to habilitados if on base /panel
                this.menuItems = items.filter(item => item.label === 'Jugadores');

                // If the user lands on the base /panel route, send them to the players list
                if (this.router.url === '/panel') {
                    this.router.navigate(['/panel/jugadores/habilitados']);
                }
            } else {
                this.menuItems = items;
            }
        });
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    toggleSubmenu(item: MenuItem) {
        if (item.children) {
            item.isOpen = !item.isOpen;
        } else if (item.route) {
            this.router.navigate([item.route]);
        }
    }

    logout() {
        this.backendService.logout();
        this.router.navigate(['/']);
    }
}
