import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
import { DomSanitizer } from '@angular/platform-browser';
declare var $ : any;

@Component({
  selector: 'app-amsbanners',
  templateUrl: './amsbanners.component.html',
  styleUrls: ['./amsbanners.component.css']
})
export class AmsbannersComponent implements OnInit {
  @Input() idGaleria;
  @Input() idVideo;
  buscando = false;
  submitted = false;
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

  ngOnInit() {
    //console.log(this.idGaleria)
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
  verNoticiasLocales(): Noticias {
    this.localStorageService = localStorage;
    const noticiasStr = this.localStorageService.getItem('noticias');
    return (noticiasStr) ? <Noticias> JSON.parse(noticiasStr) : null;
  }
  ultimaNoticiaCargada() {

  }
  verNoticias(idGaleria) {
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
