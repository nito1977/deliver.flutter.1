import { Component, Input, OnInit } from '@angular/core';
import { PanelService } from '../../../services/panel.service';

@Component({
    selector: 'app-player-history',
    templateUrl: './player-history.component.html',
    styleUrls: ['./player-history.component.css']
})
export class PlayerHistoryComponent implements OnInit {
    @Input() playerId: string;
    transfers: any[] = [];
    isLoading: boolean = false;

    constructor(private panelService: PanelService) { }

    ngOnInit() {
        if (this.playerId) {
            this.loadHistory();
        }
    }

    loadHistory() {
        this.isLoading = true;
        this.panelService.getTransferHistory(this.playerId).subscribe({
            next: (data) => {
                this.transfers = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error loading history:', err);
                this.isLoading = false;
            }
        });
    }
}
