import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  buscando = false;
  @Input() t;
  @Input() nomCampeonato;
  idCamp;
  idPartido = 0;

  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.idPartido = this._route.snapshot.params.idPartido;
    this.cargarPartidos(81, this.idPartido);
  }
  public cargarPartidos(op: number,  partido: number) {

    const thisc = this;
    this.buscando = false;
    this.t = [];
    this._http.partido(op, partido).subscribe(data => {
      thisc.t = data[0];
      thisc.buscando = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Campeonato;
        // this.idCamp = data[0].Campeonato;
        // alert (this.nomCampeonato);
      }
    });
  }
}
