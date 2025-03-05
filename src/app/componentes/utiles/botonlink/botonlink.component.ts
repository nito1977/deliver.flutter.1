import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botonlink',
  templateUrl: './botonlink.component.html',
  styleUrls: ['./botonlink.component.css']
})
export class BotonlinkComponent implements OnInit {
@Input()
nombreBoton: string;
@Input()
linkBoton: string;
  constructor() {
    this.nombreBoton = 'link';
    this.linkBoton = '#';
  }

  ngOnInit() {
  }

}
