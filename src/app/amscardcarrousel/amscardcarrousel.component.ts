import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Noticias } from '../models/noticias';
declare var $ : any;

@Component({
  selector: 'app-amscardcarrousel',
  templateUrl: './amscardcarrousel.component.html',
  styleUrls: ['./amscardcarrousel.component.css']
})
export class AmscardcarrouselComponent implements OnInit {
  buscando = false;
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
  verNoticias() {
    this.buscando = true;
    this.http.getNoticias(118, 63).subscribe(data => {
        this.buscando = false;
        this.listado = data;
        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }

}
