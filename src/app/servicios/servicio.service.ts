import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campeonatos } from './../campeonatos';
import { Tabla } from '../models/tabla';
import { Boletinesmodel} from '../models/boletinesmodel';
import { GLOBAL } from '../services/global';
import { Partidos } from '../models/partidos';
import { Eventospartido } from '../models/eventospartido';
import { Noticias } from '../models/noticias';
import { Jugador } from '../models/jugador';
import { Cuotas } from '../models/cuotas';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  prod = true;
  loc = 'http://localhost/partidos2018/api';
  int = GLOBAL.sitio + '/api';
  anio = GLOBAL.año;
  xurl = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
     
    })
  };
  constructor(private http: HttpClient) {
    if (this.prod) {
      this.xurl = this.int;
    } else {
      this.xurl = this.loc;
    }
    // console.log('el servicio esta andando');
   }
   obtenerDatos() {
    return this.http.get<Campeonatos[]>(this.xurl + '/appfsp.php?opcion=1&div=13&anio=' + this.anio);
   }

   tablaxDivxTor(op, divi, tor, zona) {
    return this.http.get<Tabla[]>(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&zona=' + zona);
   }
   partidosxFecxCampxZoxInst(op, divi, tor, zona, fecha, inst) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Tabla[]>(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&zona=' + zona + '&fecha=' + fecha + '&inst=' + inst)  ;
   }
   partido(op, partido) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Partidos[]>(this.xurl + '/appfsp.php?opcion=' + op + '&partido=' + partido)  ;
   }
   boletinesxAnioxNumero(op, anio, nro) {
    return this.http.get<Campeonatos[]>(this.xurl + '/appfsp.php?opcion=' + op + '&getboletin=' + nro + '&getanio=' + anio);
   }
   detallePartidosxTorneoxDivxFecxBoletin(op, divi, tor, zona, fecha, bole) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Campeonatos[]>(this.xurl + '/appfsp.php?opcion=' + op + '&dive=' + divi + '&torne=' + tor + '&zonae=' + zona + '&boletine=' + bole);
   }
   campeonatosxAnioxDivi(op, anio, divi, zona) {
    return this.http.get<Campeonatos[]>(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&anio=' + anio + '&zona=' + zona);
   }
   jugadorxDni(op, dni) {
    return this.http.get<Jugador[]>(this.xurl + '/appfsp.php?opcion=' + op + '&licencia=' + dni);
   }
   InsertaCuotaPaga(op, cuota: Cuotas): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.xurl + '/alta.php',  JSON.stringify(cuota) );
   }
   listadoBoletines() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Boletinesmodel[]>(this.xurl + '/appfsp.php?opcion=11');
   }
   listadoEventos(op, divi, tor, tipoe) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Eventospartido[]>(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&tipoe=' + tipoe);
   }
   public getNoticias(op, cate) {
    const params = 'opcion=' + op + '&cate=' + cate;
    return this.http.get<Noticias[]>(this.xurl + '/appfsp.php?' + params);
  }
   // appfsp.php?opcion=10&torne=122&dive=13&zonae=A&fechae=1&boletine=1&admin=1243999123234939
}


