import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit {
  detalleTabla;
  detalleClasificaEspecial;
  tituloClasificaEspecial;
  resumenClasificaEspecial;
  zona = '';
  @Input() idCampeonato;
  @Input() idDivision;
  @Input() idZona;
  @Input() idFecha;
  @Input() idInst;
  buscando: boolean;
  clasifica_especial = true;
  nomCampeonato;
  divCampeonato;
  fechas = []
  showScrollArrows = false;
  @ViewChild('datesWrapper') datesWrapper: ElementRef;

  constructor(
    private _http: ServicioService,
    private _route: ActivatedRoute,
    private router: Router) {
    // alert(this.llamadoDesde);
    this.idCampeonato = this._route.snapshot.params.idcamp;
    this.idDivision = this._route.snapshot.params.iddiv;
    this.idZona = this._route.snapshot.params.idzona;
    this.idFecha = this._route.snapshot.params.idFecha;
    this.idInst = this._route.snapshot.params.idInst;
    //this.fechas = Array(this.idFecha)
    this.cargaTabla(3, this.idCampeonato, this.idDivision, this.idZona);
    this.cargaClasiEspecial(3, this.idCampeonato, this.idDivision, this.idZona);
    this._http.partidosxMaxFecha(84, this.idDivision, this.idCampeonato, this.idZona).subscribe(data => {
      if (!this.idFecha) {
        this.idFecha = data[0]['Max'];
      }
      this.fechas = this.counter(this.idFecha)

    })


    this.router.routeReuseStrategy.shouldReuseRoute = function () {
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
  ngAfterViewInit(): void {
    const _this = this;
    setTimeout(() => {
      this.checkScrollArrows();
    }, 500);
  }

  ngOnInit() {


    //console.log(this.idZona);

  }
  public cargaTabla(op: number, tor: number, div: number, zona: string) {
    // alert(op);
    //alert(zona);
    this.idZona = zona;
    // this._route.snapshot.params.idzona = zona;
    this.buscando = false;
    this.detalleTabla = [];
    this._http.tablaxDivxTor(op, div, tor, zona, 0).subscribe(data => {
      this.detalleTabla = data;
      this.buscando = true;
      if (data.length <= 0) {
        alert('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Nombre;
        this.divCampeonato = data[0].Cate;
        //this.idFecha = data[0].Fecha;
        // alert (this.nomCampeonato);
      }
    });
  }
  public cargaClasiEspecial(op: number, tor: number, div: number, zona: string) {
    this.detalleClasificaEspecial = [];
    this.clasifica_especial = false;
    var _this = this;
    this._http.clasificaEspecialxDivxTorxZona(31, div, tor, zona).subscribe(data => {
      if (data.length > 0) {
        // Si hay datos, se procesan
        this.clasifica_especial = data[0].habilitado;
        this.detalleClasificaEspecial = data;
        this.tituloClasificaEspecial = data[0].titulo;
        this.resumenClasificaEspecial = data[0].resumen;
      } else {
        // Si no hay datos, puedes manejarlo de la siguiente manera
        console.warn('No se encontraron datos.'); // O mostrar un mensaje al usuario
        this.clasifica_especial = null; // O el valor que consideres apropiado
        this.detalleClasificaEspecial = []; // Inicializa como un array vacío o el valor correcto
        this.tituloClasificaEspecial = '';
        this.resumenClasificaEspecial = '';
      }
    });
  }
  public cargaUrl(op: number, ruta: string, tor: number, div: number, zona: string, fec: number) {
    if (fec) {
      this.router.navigate(['/' + ruta + '/' + tor + '/' + div + '/' + zona + '/' + fec]);
    } else {

      this.router.navigate(['/' + ruta + '/' + tor + '/' + div + '/' + zona]);
    }
    // this.cargaTabla(op, tor, div, zona);
  }
  counter(i: number) {
    var y: number = + this.idFecha;
    return new Array(y);
  }
  numFecha(i: number) {
    var j = i++;
    return j;
  }

  checkScrollArrows() {
    if (this.datesWrapper && this.datesWrapper.nativeElement) {
      const element = this.datesWrapper.nativeElement;
      this.showScrollArrows = element.scrollWidth > element.clientWidth;
    }
  }

  scrollDates(direction: string) {
    if (this.datesWrapper && this.datesWrapper.nativeElement) {
      const element = this.datesWrapper.nativeElement;
      const scrollAmount = 200;
      if (direction === 'left') {
        element.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }

}
