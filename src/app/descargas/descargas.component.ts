import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {
  url: string = "https://fspatin.com/descargas/";
  urlSafe: SafeResourceUrl;
  @Input() lnk: any;
  constructor(public sanitizer: DomSanitizer, private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.lnk = this._route.snapshot.params.lnk;
    switch(this.lnk) {
      case 'actas':
        this.url = 'https://fspatin.com/descargas/Actas';
        break;
      case 'resoluciones':
        this.url = 'https://fspatin.com/descargas/Resoluciones';
        break;
      case 'boletines':
        this.url = 'https://fspatin.com/descargas/Boletines';
        break;
      case 'comunicados':
        this.url = 'https://fspatin.com/descargas/Comunicados';
        break;
      case 'documentos-utiles':
        this.url = 'https://fspatin.com/descargas/Documentos Utiles';
        break;
      case 'tablas-finales':
        this.url = 'https://fspatin.com/descargas/Documentos Utiles';
        break;
      default:
        this.url = 'https://fspatin.com/descargas/';
    }
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
