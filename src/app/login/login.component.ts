import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user/user.service';
import { Usuarios } from '../models/usuarios';
import { ServiciosamsService } from '../servicios/serviciosams.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public titulo = 'Asociación Médica Sarmiento';
  public user: Usuarios;
  public mesagge: String;
  public status: Boolean;
  tituloEstatus = '';
  public identity;
  public estatus: Boolean = false;
  public tocken;
  public bloquear = false;
  public listado;
  colorLetraLogin = 'colorLetraLogin';
  colorFondoLogin = 'colorFondoLogin';
  colorInputLogin = 'colorInputLogin';
  colorLabelsLogin = 'colorLabelsLogin';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private http: ServiciosamsService
  ) {
    this.user = new Usuarios('', '', 0);
    this.bloquear = false;
  }

  ngOnInit() {
    // console.log('identidad ' + this._userService.getIdentity());
    // console.log(localStorage.getItem('identity'));
    // console.log(localStorage.getItem('tocken'));
  }
  ngSubmit() {
    this.bloquear = true;
    this.http.LoginGet(9, this.user).subscribe(data => {
        this.bloquear = false;
        if (data[0] === undefined) {
          this.estatus = true;
          this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
        } else {
        this.listado = data;
        this.http.setearNombreUsuario(this.listado[0].nombre);
        this._router.navigate(['/menu']);
        }
      },
      error => {
          this.bloquear = false;
          this.estatus = true;
          this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
          console.log(<any>error);
      });

  }
  ngSubmitPost() {
    this.bloquear = true;
    this.status = null;
    this.mesagge = '';
      this._userService.LogIn_user(this.user).subscribe(
        result => {
            if (result.code !== 200) {
                console.log(result);
            } else {
                this.user = result.data;
            }
        },
        error => {
            alert('No dispone de conexion a internet!');
            console.log(<any>error);
        }
    );
  }
}
