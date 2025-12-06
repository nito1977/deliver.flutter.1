import { Component } from '@angular/core';
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
  selectedDivision: string | null = 'primera';
  selectedCampeonato: number;

  constructor(private http: ServicioService, private _route: ActivatedRoute) {
    this.muestra = 0;
    const a = new Date();
    this.anioSel = a.getFullYear();
  }
  public cargaAnio(anio: number) {
    this.anioSel = anio;
    this.cargaTorneos(1, true, 13, 'A', 1);

  }
  public cargaTorneos(op: number, refresca: boolean, div: number, zona: string, camp: number) {
    // alert(op);
    // if (div === 13 || div === 12) {
    //   this.selectedDivision = 'primera';
    // } else if (div === 18 || div === 21) {
    //   this.selectedDivision = 'damas';
    // } else if (div === 4 || div === 5 || div === 6 || div === 7 || div === 8 || div === 9 || div === 10 || div === 11) {
    //   this.selectedDivision = 'inferior';
    // } else {
    //   this.selectedDivision = null;
    // }
    this.selectedDivision = div.toString();
    this.selectedCampeonato = camp;
    console.log(this.selectedDivision);
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

        // Scroll to stats section on mobile devices
        if (window.innerWidth < 768) {
          setTimeout(() => {
            const statsElement = document.getElementById('stats');
            if (statsElement) {
              const navbarHeight = 60; // Approximate navbar height
              const elementPosition = statsElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
      });
    }
  }
  public limpiaLista() {
    this.detalleCamp = [];
    this.detalleCampDamas = [];
    this.detalleCampInfVarones = [];
    this.detalleCampInfDamas = [];
  }
}
