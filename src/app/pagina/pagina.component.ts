import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  paginaMapaUbicacion;
  paginaMapaClubes;
  constructor(private _sanitizationService: DomSanitizer) { 
    // this.paginaMapaUbicacion = this._sanitizationService.bypassSecurityTrustUrl();
    // console.log(this.paginaMapaUbicacion);
  }

  ngOnInit() {
    this.paginaMapaUbicacion = this._sanitizationService.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.875080050006!2d-68.52661877308927!3d-31.52868492248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816a9cd383cce1%3A0x8bc065006444f32d!2sFederacion%20Sanjuanina%20de%20Patin!5e0!3m2!1ses-419!2sar!4v1616005534078!5m2!1ses-419!2sar');
    this.paginaMapaClubes = this._sanitizationService.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54406.670879059515!2d-68.56419855159879!3d-31.54017054631031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclubes%20hockey%20patin%20san%20juan!5e0!3m2!1ses-419!2sar!4v1612992929936!5m2!1ses-419!2sar" width="100%');
  }
  transform(url) {
    
  }
}
