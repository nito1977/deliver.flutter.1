import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partidodetalle',
  templateUrl: './partidodetalle.component.html',
  styleUrls: ['./partidodetalle.component.css']
})
export class PartidodetalleComponent implements OnInit {

  buscando = false;
  detallePartido;
  nomCampeonato;
  idPartido = 0;
  eventoimg = '';
  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.idPartido = this._route.snapshot.params.idPartido;
    this.cargarPartidos(82, this.idPartido);
  }
  public cargarPartidos(op: number,  partido: number) {
    // alert(op);
    const thisc = this;
    this.buscando = false;
    this.detallePartido = [];
    this._http.partido(op, partido).subscribe(data => {
      thisc.detallePartido = data;
      thisc.buscando = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Campeonato;
        // alert (this.nomCampeonato);
      }
    });
  }
  determinaEvento(e: number): boolean {
    const thisce = this;
    if (e === 1) { thisce.eventoimg = 'gol.png'; }
    if (e === 2) { thisce.eventoimg = 'amarilla.jpg'; }
    if (e === 3) { this.eventoimg = 'azul.png'; }
    if (e === 4) { this.eventoimg = 'roja.png'; }
    return true;
  }
}
