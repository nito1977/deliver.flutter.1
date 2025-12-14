import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosamsService } from '../servicios/serviciosams.service';
import { Usuarios } from '../models/usuarios';
import { BackendService } from '../services/backend.service';

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
    private http: ServiciosamsService, // Kept for setearNombreUsuario compatibility
    private authService: BackendService
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

    // Use BackendService for authentication
    this.authService.login(this.user.nombre.toString(), this.user.clave.toString()).subscribe({
      next: (userData) => {
        this.bloquear = false;

        // Success: Logged in via BackendService
        // Backward Compatibility: Set legacy global user ID
        this.http.setearNombreUsuario(userData.username);

        this._router.navigate(['/usuarios']);
      },
      error: (error) => {
        this.bloquear = false;
        this.estatus = true;

        // Log the full error for debugging
        console.error('Login error:', error);

        // Determine user-facing message
        if (error.status === 401 || error.status === 403) {
          this.tituloEstatus = 'Credenciales incorrectas.';
        } else if (error.error && error.error.message) {
          this.tituloEstatus = error.error.message;
        } else {
          this.tituloEstatus = 'Error de conexión o problema en el servidor. Por favor intente más tarde.';
        }
      }
    });
  }
}

