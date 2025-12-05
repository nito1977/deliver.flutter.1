import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-amsvideo',
  templateUrl: './amsvideo.component.html',
  styleUrls: ['./amsvideo.component.css']
})
export class AmsvideoComponent implements OnInit {
  @Input() idGaleria;
  buscando = false;
  submitted = false;
  listado: any[] = []; // Tu lista de noticias
  video: any; // Almacena el video actual
  urlimgs = 'https://fspatin.com/web/wp-content/uploads';
  url = '';
  videoUrl: SafeResourceUrl | null = null;
  private localStorageService;
  currentSession: Noticias = null;
  titulo: string;
  constructor(private http: ServicioService, private sanitizer: DomSanitizer) { }

  getSanitizedResumen(resumen: string) {
    if (resumen != null) {
      return this.sanitizer.bypassSecurityTrustHtml(resumen);
    } else {
      return '';
    }
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

  getSafeUrl(titulo: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(titulo);
  }
  getVideo(): any {

    if (this.listado.length > 0) {
      let videoTitulo = this.listado[0].titulo;

      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoTitulo);
    } else {
      this.videoUrl = null;

    }
    // Obtener solo el primer video
  }
  verNoticias(idGaleria) {
    this.buscando = true;
    this.http.getNoticias(118, idGaleria).subscribe(data => {
      this.buscando = false;
      this.listado = data;
      if (data && data.length > 0) {
        this.titulo = data[0]["resumen"] != null ? data[0]["resumen"].toString() : '-';
        this.video = this.getVideo(); // Asignar el primer video a la variable
      } else {
        this.titulo = '-';
        this.video = null;
      }
    });

  }
}
