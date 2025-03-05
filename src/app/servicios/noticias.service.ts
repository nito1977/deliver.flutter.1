import { Injectable } from '@angular/core';

import { Noticias } from '../models/noticias';
import { GLOBAL } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private localStorageService;
  private ult: number;
  constructor() { }
  devuelveUltimaNoticia() {

    return GLOBAL.ultNotCargada;
  }
  verificaNoticiaLocalStorage() {
    this.localStorageService = localStorage;
    const ultNoticiaStr = this.localStorageService.getItem('ultNoticia');
    return (ultNoticiaStr) ? <number> JSON.parse(ultNoticiaStr) : null;
  }
}
