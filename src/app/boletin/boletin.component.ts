import { Component, OnInit } from '@angular/core';
import { Campeonatos } from '../campeonatos';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidoslistComponent } from '../partidoslist/partidoslist.component';
import { Boletinesmodel } from '../models/boletinesmodel';

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
  buscando: boolean;
  detalleCamp: any[];
  detalleCampInfVarones: Campeonatos[];
  detalleCampInfDamas: Campeonatos[];
  detalleCampDamas: Campeonatos[];
  detalleBoletines: Boletinesmodel[];
  constructor(private http: ServicioService, private _route: ActivatedRoute, private router: Router) {
    this.muestra = 0;
    const a = new Date();
    this.anioSel = a.getFullYear();
    this.bolSel = 1;
  }
  ngOnInit() {
    this.cargaBoletines(this.anioSel, this.bolSel);
    this.http.listadoBoletines().subscribe(
      data => {
          this.buscando = false;
          this.detalleBoletines = data;
        },
      error => {
        alert('error cargando listado boletines');
        // Do stuff whith your error
      },
      () => {
        this.buscando = true;

        // Do stuff after completion
      });
  }

  public cargaBoletines(anio: number, idBoletin) {
    this.anioSel = anio;
    this.cargaTorneos(9, true, anio, idBoletin);

  }
  public cargaTorneos(op: number, refresca: boolean, anio: number, idboletin: number) {

      this.buscando = true;
      this.detalleCamp = [];
      this.http.boletinesxAnioxNumero(op, this.anioSel, idboletin).subscribe(
        data => {
        this.buscando = false;
            this.detalleCamp = data;
      },
      erro => {
        alert('error cargando boletines');
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
