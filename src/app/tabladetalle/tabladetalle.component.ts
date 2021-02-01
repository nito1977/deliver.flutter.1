import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabladetalle',
  templateUrl: './tabladetalle.component.html',
  styleUrls: ['./tabladetalle.component.css']
})
export class TabladetalleComponent implements OnInit {
  detalleTabla;
  zona = '';
  @Input() idCampeonato;
  @Input() idDivision;
  @Input() idZona;
  buscando: boolean;
  nomCampeonato;
  divCampeonato;
  constructor(private _http: ServicioService, private _route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
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
        // alert (this.nomCampeonato);
      }
    });
  }
  public cargaUrl(op: number,  tor: number, div: number, zona: string) {
    this.router.navigate(['/tabla/' + tor + '/' + div + '/' + zona]);
    this.cargaTabla(3, tor, div, zona);
  }
}
