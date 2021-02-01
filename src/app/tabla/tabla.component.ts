import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  detalleTabla;
  zona = '';
  @Input() idCampeonato;
  @Input() idDivision;
  @Input() idZona;
  buscando: boolean;
  nomCampeonato;
  divCampeonato;

  constructor(private _http: ServicioService, private _route: ActivatedRoute, private router: Router ) {
    // alert(this.llamadoDesde);
   }

  ngOnInit() {

    this.idCampeonato = this._route.snapshot.params.idcamp;
    this.idDivision = this._route.snapshot.params.iddiv;
    this.idZona = this._route.snapshot.params.idzona;
    this.cargaTabla(3, this.idCampeonato, this.idDivision, this.idZona);
  }
  public cargaTabla(op: number,  tor: number, div: number, zona: string) {
    // alert(op);
    this.idZona = zona;
    // this._route.snapshot.params.idzona = zona;
    this.buscando = false;
    this.detalleTabla = [];
    this._http.tablaxDivxTor(op, div, tor, zona).subscribe(data => {
      this.detalleTabla = data;
      this.buscando = true;
      if (data.length <= 0) {
        alert('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Nombre;
        this.divCampeonato = data[0].Cate;
        // alert (this.nomCampeonato);
      }
    });
  }
  public cargaUrl(op: number, ruta: string,  tor: number, div: number, zona: string) {
    this.router.navigate(['/' + ruta + '/' + tor + '/' + div + '/' + zona]);
    // this.cargaTabla(op, tor, div, zona);
  }
}
