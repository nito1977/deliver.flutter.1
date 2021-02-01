import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
declare var $ : any;

@Component({
  selector: 'app-amsnoticias',
  templateUrl: './amsnoticias.component.html',
  styleUrls: ['./amsnoticias.component.css']
})
export class AmsnoticiasComponent implements OnInit {
  buscando = false;
  submitted = false;
  listado;
  urlimgs = 'https://fspatin.com/wp-content/uploads';
  private localStorageService;
  currentSession: Noticias = null;
  constructor(private http: ServicioService) { }

  ngOnInit() {
    this.verNoticias();
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
  verNoticias() {
    this.buscando = true;
    this.http.getNoticias(118).subscribe(data => {
        this.buscando = false;
        this.listado = data;
        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }
}
