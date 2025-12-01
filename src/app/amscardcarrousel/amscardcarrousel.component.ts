import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
import { DomSanitizer } from '@angular/platform-browser';
declare var $ : any;

@Component({
  selector: 'app-amscardcarrousel',
  templateUrl: './amscardcarrousel.component.html',
  styleUrls: ['./amscardcarrousel.component.css']
})
export class AmscardcarrouselComponent implements OnInit {
  @Input() idGaleria;
  buscando = false;
  listado;
  urlimgs = 'https://fspatin.com/web/wp-content/uploads';
  url = 'https://fspatin.com/web/';
  private localStorageService;
  currentSession: Noticias = null;
  constructor(private http: ServicioService, private sanitizer: DomSanitizer) { }
  getSanitizedResumen(resumen: string) {
    return this.sanitizer.bypassSecurityTrustHtml(resumen);
  }
  getFirstParagraph(resumen: string): string {
    const firstParagraph = resumen.match(/<p>(.*?)<\/p>/);
    return firstParagraph ? firstParagraph[1] : resumen; // Devuelve el primer párrafo o el resumen completo si no hay párrafo.
  }
  limitResumen(resumen: string, limit: number = 100): string {
    if (resumen.length > limit) {
      return resumen.substring(0, limit) + '...'; // Agrega puntos suspensivos si excede el límite
    }
    return resumen;
  }

  ngOnInit() {
    this.verNoticias(this.idGaleria);
    // ("#myCarousel").carousel();
    /*this.currentSession = this.verNoticiasLocales();
    if (this.currentSession) {
      this.listado = this.currentSession;
    } else {
      this.verNoticias();
    }*/
  }
  ngAfterViewInit() {

    $('.carousel').carousel({
      interval: 3000
    })

  }
  verNoticias(idGaleria: any) {
    this.buscando = true;
    this.http.getNoticias(118, idGaleria).subscribe(data => {
        this.buscando = false;
        this.listado = data;
        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }

}
