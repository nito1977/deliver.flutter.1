import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partidoeventos',
  templateUrl: './partidoeventos.component.html',
  styleUrls: ['./partidoeventos.component.css']
})
export class PartidoeventosComponent implements OnInit {

  @Input() idCamp: number;
  @Input() nCamp: number;
  @Input() idDiv: number;
  @Input() idEve: number;

  buscando: boolean;
  detalleEventos: any[];
  nomCampeonato;
  eventoband = '';


  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.idCamp = this._route.snapshot.params.idcamp;
    this.idDiv = this._route.snapshot.params.iddiv;
    this.idEve = this._route.snapshot.params.idevento;
    this.cargarEventos(12, this.idCamp, this.idDiv, this.idEve);
  }
  public cargarEventos(op: number,  tor: number, div: number, tipoe: number) {
    // alert(op);
    this.buscando = false;
    this.detalleEventos = [];
    this._http.listadoEventos(op, div, tor, tipoe).subscribe(data => {
      this.detalleEventos = data;
      this.buscando = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
      } else {
        // this.nomCampeonato = data[0].Nombre;
        // alert (this.nomCampeonato);
      }
    });
  }

}
