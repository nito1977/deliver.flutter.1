import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
declare var $ : any;

@Component({
  selector: 'app-amsnoticia',
  templateUrl: './amsnoticia.component.html',
  styleUrls: ['./amsnoticia.component.css']
})
export class AmsnoticiaComponent implements OnInit {
  @Input() idGaleria;
  buscando = false;
  submitted = false;
  listado;
  urlimgs = 'https://fspatin.com/web/wp-content/uploads';
  url = 'https://fspatin.com/web/';
  private localStorageService;
  currentSession: Noticias = null;
  constructor(private http: ServicioService) { }

  ngOnInit() {
    //console.log(this.idGaleria)
    this.verNoticias(53);
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
