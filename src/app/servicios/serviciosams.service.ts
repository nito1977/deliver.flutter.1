import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../models/seccion';
import { Os } from '../models/os';


import { Noticias } from '../models/noticias';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';
import * as sha1 from 'js-sha1';

import { GLOBAL } from '../services/global';

import { Totales } from '../models/totales';

@Injectable({
  providedIn: 'root'
})
export class ServiciosamsService {
  prod = true;
  loc = 'http://localhost/partidos2018/api';
  int = 'https://fspatin.com/api';
  usUrlLoc = 'http://localhost/partidos2018/api';
  usUrlInt = GLOBAL.sitio + 'api';
  xurl = '';
  usuUrl = '';
  constructor(private http: HttpClient) {
    if (this.prod) {
      this.xurl = this.int;
      this.usuUrl = this.usUrlInt;
    } else {
      this.xurl = this.loc;
      this.usuUrl = this.usUrlLoc;
    }
    console.log('el servicio esta andando');
  }
  cargaSecciones(op, nivel) {
    return this.http.get<Seccion[]>(this.xurl + '/appams.php?opcion=' + op + '&nivel=' + nivel);

  }
  buscaOs(op, busca, orden, tipoOrden, ini, fin) {
    const params = 'opcion=' + op + '&busca=' + busca + '&orden=' + orden + '&tipoOrden=' + tipoOrden + '&ini=' + ini + '&fin=' + fin;
    return this.http.get<Os[]>(this.xurl + '/appams.php?' + params);
  }


  // de usuarios
  public setearNombreUsuario(nombre: string) {
    switch (nombre.length) {
      case 1:
        GLOBAL.idUsuario = '00000' + nombre;
        break;
      case 2:
        GLOBAL.idUsuario = '0000' + nombre;
        break;
      case 3:
        GLOBAL.idUsuario = '000' + nombre;
        break;
      case 4:
        GLOBAL.idUsuario = '00' + nombre;
        break;
      case 5:
        GLOBAL.idUsuario = '0' + nombre;
        break;
      case 6:
        GLOBAL.idUsuario = nombre;
        break;
      default:
        GLOBAL.idUsuario = '';
    }
  }
  public isLogged(): boolean {
    if (this.devolverIdUsuario() === '') {
      return false;
    } else {
      return true;
    }
  }
  public devolverIdUsuario() {
    return GLOBAL.idUsuario;
  }
  public devolverUrlDescarga() {
    return GLOBAL.urlPublica;
  }
  public LoginGet(op, usuario: Usuarios) {
    const params = 'opcion=' + op + '&nombre=' + usuario.nombre + '&clave=' + sha1.sha1(usuario.clave.toString());
    // console.log(params);
    return this.http.get<Noticias[]>(this.usuUrl + '/appams.php?' + params);
  }

  // de noticias
  public getNoticias(op, cate: number) {
    const params = 'opcion=' + op + '&cate=' + cate;
    return this.http.get<Noticias[]>(this.xurl + '/appfsp.php?' + params);
  }

  public cantidadTabla(op, tabla, campo) {
    const params = 'opcion=' + op + '&tabla=' + tabla + '&campo=' + campo;
    return this.http.get<Totales[]>(this.xurl + '/appams.php?' + params);
  }

  public TotaldeObrasSociales(cant) {
    GLOBAL.cantObrasSociales = cant;
  }
  public DevuelveCantdeObrasSociales() {
    return GLOBAL.cantObrasSociales;
  }
  public TotaldePadron(cant) {
    GLOBAL.cantPadron = cant;
  }
  public DevuelveCantdePadron(): number {
    return GLOBAL.cantPadron;
  }

  // utilidades
  public DevuelveCantdePaginador(): number {
    return GLOBAL.cantPaginador;
  }
  calcularPaginador(numero, precision) {
    return Math.round(numero / precision);
  }
  convertirNumeroEnArreglo(numero) {
    return Array(numero).fill(1).map((x, i) => i); // [0,1,2,3,4]
  }

}
