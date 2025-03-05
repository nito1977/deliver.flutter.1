import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosamsService } from '../servicios/serviciosams.service';
import { Seccion } from '../models/seccion';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  detalleMenu;
  muestra;
  colorMenu = 'colorMenu';
  colorLetraActivo: 'colorLetraActivo';
  colorFuenteMenu = 'colorFuenteMenu';
  colorIconoMenu = 'colorIconoMenu';
  colorFondoIconoMenu = 'colorFondoIconoMenu';
  paddingFondoIconoMenu = 'paddingFondoIconoMenu';
  title = 'AMS';
  colorFondo = 'bg-white';
  colorBarra = 'colorBarra';
  colorLetraBarra = 'colorLetraBarra';
  logo = 'logoams.png';
  tipoNav = 'navbar-light';
  logueado = false;
  secc = new Seccion(0, 'Debe estar logueado', '', '', '', 0, '', 0, '', 0, 0, 0, '', '');

  constructor(
    private http: ServiciosamsService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.logueado = this.http.isLogged();
    if (this.logueado) {
     this.cargaMenu(1, 2);
    } else {
      this.router.navigateByUrl('/');
    }
    this.cantidadObrasSociales();
  }
  cargaMenu(op: number, level: number) {
    this.http.cargaSecciones(1, level).subscribe(data => {
      this.detalleMenu = data;
    });
  }
  cantidadObrasSociales() {
    this.http.cantidadTabla(11, 'obra_social', 'id_os').subscribe(data => {
      // console.log(data[0].total);
      this.http.TotaldeObrasSociales(data[0].total);
    });
  }
  cantidadPadron() {
    this.http.cantidadTabla(11, 'padron_socios', 'id_padron').subscribe(data => {
      // console.log(data[0].total);
      this.http.TotaldePadron(data[0].total);
    });
  }

}
