import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  idCampeonato: number;
  idDivision: number;
  idZona: string;
  idFecha: number;
  idInst: number;
  buscando: boolean;
  detalleTabla: any[];
  nomCampeonato;
  ganador = '';

  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.idCampeonato = this._route.snapshot.params.idcamp;
    this.idDivision = this._route.snapshot.params.iddiv;
    this.idZona = this._route.snapshot.params.idzona;
    this.idFecha = this._route.snapshot.params.idFecha;
    this.idInst = this._route.snapshot.params.idInst;
    this.cargarPartidos(8, this.idCampeonato, this.idDivision, this.idZona, this.idFecha, this.idInst);
  }
  public cargarPartidos(op: number,  tor: number, div: number, zona: string, fecha: number, inst: number) {
    // alert(op);
    this.buscando = false;
    this.detalleTabla = [];
    this._http.partidosxFecxCampxZoxInst(op, div, tor, zona, fecha, inst).subscribe(data => {
      this.detalleTabla = data;
      this.buscando = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Nombre;
        // alert (this.nomCampeonato);
      }
    });
  }
  determinaGanador(idc: number, tl: number, tv: number): boolean {
    if (tl === tv) { this.ganador = 'btn btn-info'; }
    if (tl > tv) { this.ganador = 'btn btn-success'; }
    if (tl < tv) { this.ganador = 'btn btn-warning'; }
    return true;
  }
}
