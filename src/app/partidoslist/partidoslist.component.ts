import { Component, OnInit, Input} from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-partidoslist',
  templateUrl: './partidoslist.component.html',
  styleUrls: ['./partidoslist.component.css']
})
export class PartidoslistComponent implements OnInit {
  @Input() idCamp: number;
  @Input() nCamp: number;
  @Input() idDiv: number;
  @Input() idZon: string;
  @Input() idFec: number;
  @Input() idIns: number;
  @Input() idBol: number;
  @Input() nCat: string;
  buscando: boolean;
  detalleTabla: any[];
  nomCampeonato;
  ganaloc = '';
  pierdeloc = '';
  ganavis = '';
  pierdevis = '';

  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPartidos(8, this.idCamp, this.idDiv, this.idZon, this.idFec, this.idIns);
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
  determinaGanador(equipo: string, idc: number, tl: number, tv: number): boolean {
    if (equipo === 'loc') {
    if (tl === tv) { this.ganaloc = 'bg-white pr-1 pl-1'; this.ganavis = 'bg-white pr-1 pl-1'; }
    if (tl > tv) { this.ganaloc = 'bg-success pr-1 pl-1'; } else { this.ganaloc = 'bg-white pr-1 pl-1'; }
  } else {
    if (tl < tv) {
      this.ganavis = 'bg-warning pr-1 pl-1';
    } else {
      this.ganavis = 'bg-white pr-1 pl-1';
    }

  }
  return true;
 }
}
