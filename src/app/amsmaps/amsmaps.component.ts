import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import {DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-amsmaps',
  templateUrl: './amsmaps.component.html',
  styleUrls: ['./amsmaps.component.css']
})
export class AmsmapsComponent implements OnInit {
  @Input()
  mapaurl;

  constructor(private dom:DomSanitizer) { 
    //variable : String;
    this.mapaurl = this.dom.bypassSecurityTrustResourceUrl(this.mapaurl); 
  }

  ngOnInit(): void {
  }
  getUrlMapa(){
    return this.mapaurl;
  }

}
