import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amscampstats',
  templateUrl: './amscampstats.component.html',
  styleUrls: ['./amscampstats.component.css']
})
export class AmscampstatsComponent implements OnInit, OnChanges {
  @Input() idDivision;
  buscando: boolean;
  buscandoActivos: boolean;
  detalleTabla: any[];
  nomCampeonato: any;
  detalleActivos: any[];
  idCamp1: any;
  idCamp2: any;
  idDiv1: any;
  idDiv2: any;
  op: number;
  opDiv: number;
  tit1: string;
  tit2: string;
  showAllMatches: boolean = false;
  initialMatchCount: number = 6; // Show 6 matches initially (3 rows x 2 columns)

  constructor(public _http: ServicioService, public _route: ActivatedRoute) { }

  toggleShowMatches() {
    this.showAllMatches = !this.showAllMatches;
  }

  get displayedMatches() {
    if (this.showAllMatches || !this.detalleTabla) {
      return this.detalleTabla;
    }
    return this.detalleTabla.slice(0, this.initialMatchCount);
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idDivision'] && !changes['idDivision'].firstChange) {
      this.loadData();
    }
  }

  loadData() {
    var _this = this;
    //console.log(_this.idDivision);
    if (this.idDivision == 'primera') {
      this.idDiv1 = 13;
      this.idDiv2 = 13;
      this.op = 21;
      this.opDiv = 87
      this.tit1 = "Mayores";
      this.tit2 = "Varones";
    }
    if (this.idDivision == 'damas') {
      this.idDiv1 = 18;
      this.idDiv2 = 17;
      this.op = 22;
      this.opDiv = 86;
      this.tit1 = "Info";
      this.tit2 = "Damas";
    }
    this.buscaCampeonatosActivos(this.op, this.opDiv);
  }

  public buscaCampeonatosActivos(op: number, opDiv: number) {
    var _this = this;
    this.buscandoActivos = false;
    this.detalleActivos = [];
    this._http.campeonatosActivosxDiv(op).subscribe(data => {
      this.detalleActivos = data;
      //console.log('DAtos - >' + data)
      this.buscandoActivos = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
        this.buscandoActivos = false;
      } else {
        var c1 = data[0]["id"];
        var c2 = data[1]["id"];
        _this.idCamp1 = c1;
        _this.idCamp2 = c2;
        this.cargarPartidos(opDiv, 0, 0, '', 0, 0);
        this.nomCampeonato = data[0].Nombre;
        // alert (this.nomCampeonato);
      }
    });

  }
  public cargarPartidos(op: number, tor: number, div: number, zona: string, fecha: number, inst: number) {
    // alert(op);
    this.buscando = false;
    this.detalleTabla = [];
    this._http.partido(op, 0).subscribe(data => {
      this.detalleTabla = data;
      //console.log('DAtos - >' + data)
      this.buscando = true;
      if (data.length <= 0) {
        console.log('no encontro nada');
      } else {
        this.nomCampeonato = data[0].Nombre;
        // alert (this.nomCampeonato);
      }
    });
  }

}
