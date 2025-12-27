import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }
}
