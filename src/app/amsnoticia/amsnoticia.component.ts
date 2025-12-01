import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-amsnoticia',
  templateUrl: './amsnoticia.component.html',
  styleUrls: ['./amsnoticia.component.css']
})
export class AmsnoticiaComponent implements OnInit {
  noticiaId: string | null = null;
  @Input() idGaleria;
  buscando = false;
  submitted = false;
  listado;
  urlimgs = 'https://fspatin.com/web/wp-content/uploads';
  url = 'https://fspatin.com/web/';
  private localStorageService;
  currentSession: Noticias = null;
  constructor(private http: ServicioService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.noticiaId = params.id;
    });

   }

   getSanitizedResumen(resumen: string) {
    return this.sanitizer.bypassSecurityTrustHtml(resumen);
  }
  getFirstParagraph(resumen: string): string {
    const firstParagraph = resumen.match(/<p>(.*?)<\/p>/);
    return firstParagraph ? firstParagraph[1] : resumen; // Devuelve el primer párrafo o el resumen completo si no hay párrafo.
  }

  ngOnInit() {
    //console.log(this.idGaleria)

    // ("#myCarousel").carousel();
    /*this.currentSession = this.verNoticiasLocales();
    if (this.currentSession) {
      this.listado = this.currentSession;
    } else {
      this.verNoticias();
    }*/
      this.route.paramMap.subscribe(params => {
        this.noticiaId = params.get('idGaleria'); // Asegúrate de que 'id' coincide con el nombre del parámetro en tu ruta
      });
      this.verNoticias(this.noticiaId);

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
    this.http.getNoticia(120, idGaleria).subscribe(data => {
        this.buscando = false;
        this.listado = data[0];
        this.listado.foto1 = this.urlimgs + '/' + this.listado.foto1;
        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }
}
