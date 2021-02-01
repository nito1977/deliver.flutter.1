import { Component} from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Campeonatos } from '../campeonatos';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent {

  campList: Campeonatos[];
  campListDamas: Campeonatos[];
  detalleCamp;
  detalleCampDamas;
  detalleCampInfVarones;
  detalleCampInfDamas;
  buscando: boolean;
  muestra = 0;
  anioSel: number;
  divSel: number;
  constructor(private http: ServicioService, private _route: ActivatedRoute) {
    this.muestra = 0;
    const a = new Date();
    this.anioSel = a.getFullYear();
  }
  public cargaAnio(anio: number) {
    this.anioSel = anio;
    this.cargaTorneos(1, true , 13, 'A');
  }
  public cargaTorneos(op: number, refresca: boolean, div: number, zona: string) {
    // alert(op);
    if ((this.muestra !== div) || (refresca = true)) {
      this.muestra = div;
      this.buscando = true;
      this.detalleCamp = [];
      this.http.campeonatosxAnioxDivi(op, this.anioSel, div, zona).subscribe(data => {
        this.buscando = false;
        switch (div) {
          case 4:
            this.detalleCampInfVarones = data; break;
          case 5:
            this.detalleCampInfVarones = data; break;
          case 6:
            this.detalleCampInfVarones = data; break;
          case 7:
            this.detalleCampInfVarones = data; break;
          case 8:
            this.detalleCampInfVarones = data; break;
          case 9:
            this.detalleCampInfVarones = data; break;
          case 10:
            this.detalleCampInfVarones = data; break;
          case 11:
            this.detalleCampInfVarones = data; break;
          case 12:
            this.detalleCamp = data; break;
          case 13:
            this.detalleCamp = data; break;
          case 14:
            this.detalleCampInfDamas = data; break;
          case 15:
            this.detalleCampInfDamas = data; break;
          case 16:
            this.detalleCampInfDamas = data; break;
          case 17:
            this.detalleCampInfDamas = data; break;
          case 18:
            this.detalleCampDamas = data; break;
          case 21:
            this.detalleCampDamas = data; break;
        }

      });
    }
  }
}
