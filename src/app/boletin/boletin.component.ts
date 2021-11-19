import { Component, OnInit } from '@angular/core';
import { Campeonatos } from '../campeonatos';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PartidoslistComponent } from '../partidoslist/partidoslist.component';
import { Boletinesmodel } from '../models/boletinesmodel';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.css']
})
export class BoletinComponent implements OnInit {
  campList: Campeonatos[];
  muestra = 0;
  muestraDetalle = 0;
  idSel = 0;
  anioSel: number;
  bolSel: number;
  mesSel: number;
  buscando: boolean;
  detalleCamp: any[];
  detalleCampInfVarones: Campeonatos[];
  detalleCampInfDamas: Campeonatos[];
  detalleCampDamas: Campeonatos[];
  detalleBoletines: Boletinesmodel[];
  Encontrado: boolean = false;
  constructor(private http: ServicioService, private _route: ActivatedRoute, private router: Router) {
    this.muestra = 0;
    const a = new Date();
    this.anioSel = this._route.snapshot.params.idAnio;
    this.bolSel = this._route.snapshot.params.idBoletin;
    this.mesSel = this._route.snapshot.params.idMes;
    //this.anioSel = 2020;
    console.log(this.anioSel);
/*     if ( this.anioSel != undefined){
      this.anioSel = this._route.snapshot.params.idAnio;
      this.bolSel = this._route.snapshot.params.idBoletin;
      this.mesSel = this._route.snapshot.params.idMes;
    } else {
      this.anioSel = a.getFullYear();
      this.bolSel = 3;
      this.mesSel = 1;
    } */

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
  }
  ngOnInit() {
    this.Encontrado = false
    this.http.listadoBoletines().subscribe(
      data => {
          this.buscando = false;
          this.detalleBoletines = data;

          console.log(this.detalleBoletines)
        },
      error => {
        this.Encontrado = false
        alert('error cargando listado boletines');
        // Do stuff whith your error
      },
      () => {
        // this.buscando = true;

        // Do stuff after completion
      });
    if (this.anioSel != undefined || this.bolSel != undefined){
      this.cargaBoletines(this.anioSel, this.bolSel);
      this.Encontrado = false

      }
  }


  public cargaBoletines(anio: number, idBoletin) {
    this.anioSel = anio;

    // this.router.navigateByUrl('/boletines/'+ anio);
    this.cargaTorneos(9, true, anio, idBoletin);

  }
  public irBoletines(anio: number, idBoletin) {
    this.anioSel = anio;
    this.router.navigateByUrl('/boletines/'+ anio + '/' + idBoletin);
    //this.cargaTorneos(9, true, anio, idBoletin);

  }
  public cargaTorneos(op: number, refresca: boolean, anio: number, idboletin: number) {

      this.buscando = true;
      this.detalleCamp = [];
      this.http.boletinesxAnioxNumero(op, this.anioSel, idboletin).subscribe(
        data => {
        this.buscando = false;
        this.detalleCamp = data;
        this.Encontrado = true
      },
      erro => {
        this.buscando = false
        this.Encontrado = false
        //alert('error cargando boletines');
        // Do stuff whith your error
      },
      () => {
        // alert('despues que termino');
        // Do stuff after completion
      });
  }
  public irDetallePartidos(url, divi, tor, zona, fecha, bole, idaVer) {
    // (click)="irDetallePartidos('/partido', item.divi, item.id, item.zona, item.fecha, item.Boletin, item.id)"
    if (this.muestraDetalle !== idaVer) {
      this.muestraDetalle = idaVer;
    }
  //  this.listp.ngOnChange();
    /* const myurl =  url + '/' + tor + '/' + divi + '/' + zona + '/' + bole + '/' + bole;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    }); */
}


}
