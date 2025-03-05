import { Injectable } from '@angular/core';
// import { Usuarios } from './models/usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { GLOBAL } from './services/global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
    console.log('el servicio esta andando');
   }
   getUserDetails(usu, pas) {
    console.log('usu: ', usu, pas);
    this.httpClient.post( GLOBAL.sitio + 'api/apppostfsp.php',
    {
      username : 1,
      password : 1
    }, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application-json'
        }
      )
    }).subscribe(
      (data: any[]) => {
        console.log(data);
      }
    );

  }
   getUserDetailsPost(udata) {
     console.log('usu: ', udata);
     this.httpClient.post(GLOBAL.sitio + '/api/apppostfsp.php',
     {
       username : 1,
       password : 1
     }, {
       headers: new HttpHeaders(
         {
           'Content-Type': 'application-json'
         }
       )
     }).subscribe(
       (data: any[]) => {
         console.log(data);
       }
     );

   }
}
