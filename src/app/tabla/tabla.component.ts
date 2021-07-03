import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
  @Input() idFecha;
  buscando: boolean;
  nomCampeonato;
  divCampeonato;

  constructor(private _http: ServicioService, private _route: ActivatedRoute, private router: Router ) {
    // alert(this.llamadoDesde);
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

    this.idCampeonato = this._route.snapshot.params.idcamp;
    this.idDivision = this._route.snapshot.params.iddiv;
    this.idZona = this._route.snapshot.params.idzona;
    console.log(this.idZona);
    this.cargaTabla(3, this.idCampeonato, this.idDivision, this.idZona);
  }
  public cargaTabla(op: number,  tor: number, div: number, zona: string) {
    // alert(op);
    //alert(zona);
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
        this.idFecha = data[0].Fecha;
        // alert (this.nomCampeonato);
      }
    });
  }
  public cargaUrl(op: number, ruta: string,  tor: number, div: number, zona: string) {
    this.router.navigate(['/' + ruta + '/' + tor + '/' + div + '/' + zona]);
    // this.cargaTabla(op, tor, div, zona);
  }
}
