import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosamsService } from '../servicios/serviciosams.service';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public titulo = 'Federación Sanjuanina de Patín';
  public user: Usuarios;
  public mesagge: String;
  public status: Boolean;
  public tituloEstatus = '';
  public estatus: Boolean = false;
  public bloquear = false;

  constructor(
    private _router: Router,
    private http: ServiciosamsService
  ) {
    this.user = new Usuarios('', '', 0);
    this.bloquear = false;
  }

  ngOnInit() {
  }

  ngSubmit() {
    this.bloquear = true;
    this.estatus = false;
    this.status = false;

    this.http.LoginGet(9, this.user).subscribe({
      next: (data) => {
        this.bloquear = false;
        if (!data || data[0] === undefined) {
          this.estatus = true;
          this.tituloEstatus = 'Credenciales incorrectas o error de conexión.';
        } else {
          // Casting to any because the Service returns Noticias[] but we receive user data here
          const userData: any = data[0];
          this.http.setearNombreUsuario(userData.nombre);
          this._router.navigate(['/menu']);
        }
      },
      error: (error) => {
        this.bloquear = false;
        this.estatus = true;
        this.tituloEstatus = 'Error de conexión con el servidor.';
        console.error(error);
      }
    });
  }
}

