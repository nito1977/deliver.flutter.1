import { Injectable } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GLOBAL } from '../global';
import * as sha1 from 'js-sha1';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public _apiUrl: String;
  public identity;
  public tocken;

  constructor(private http: HttpClient) {
    this._apiUrl = GLOBAL.sitio + GLOBAL.urlLoguin;
  }

  LogIn_user(user: Usuarios): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this._apiUrl + '/apppostams.php?', json, { headers: headers });
    /*return this.http.post<Usuarios>(this._apiUrl + '/apppostams.php?', user, httpOptions).pipe(
      tap((usuarios: Usuarios) => this.log('usuario  w/ nombre=${usuario.nombre}')),
    catchError(this.handleError<Usuarios>('addCluster'))*/
  }
  private log(message: string) {
    //console.log(message);
  }

  getIdentity() {
    // console.log(localStorage.getItem('identity'));
    if (localStorage.getItem('identity') != null) {
      const identity = JSON.parse(localStorage.getItem('identity'));
      if (identity !== 'undefined') {
        this.identity = identity;
      } else {
        this.identity = null;
      }
      return identity;
    } else { return null; }
  }
  /*
    getTocken() {
      const tocken = JSON.parse(localStorage.getItem('tocken'));
      if (tocken !== 'undefined') {
        this.tocken = tocken;
      } else {
        this.tocken = null;
      }
      return tocken;
    }*/

}
