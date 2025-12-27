import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { BackendUser } from '../models/backend-user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public users: BackendUser[] = [];
  public currentUser: BackendUser;
  public showModal = false;
  public isEdit = false;
  public loading = false;
  public clubs: any[] = []; // Store clubs list

  // Form model
  public userForm: BackendUser = {
    id: null,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    group_id: 2, // Default: Member
    active: 1,
    ip_address: '',
    created_on: 0,
    last_login: 0,
    company: '',
    phone: ''
  };

  public successMsg = '';
  public errorMsg = '';

  constructor(private backend: BackendService, private _router: Router) { } // Added Router

  ngOnInit() {
    this.currentUser = this.backend.currentUserValue;

    // Security Check: Only Group 1 (Admin) can access
    if (!this.currentUser || this.currentUser.group_id != 1) {
      alert('Acceso Denegado. Se requieren permisos de Administrador.');
      this._router.navigate(['/menu']);
      return;
    }

    this.loadUsers();
    this.loadClubs();
  }

  loadClubs() {
    this.backend.getClubs().subscribe({
      next: (data) => {
        this.clubs = data;
      },
      error: (err) => {
        console.error('Error loading clubs', err);
      }
    });
  }

  loadUsers() {
    this.loading = true;
    this.backend.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Error cargando usuarios: ' + err.message;
        this.loading = false;
      }
    });
  }

  openModal(user: BackendUser | null = null) {
    this.successMsg = '';
    this.errorMsg = '';
    this.showModal = true;
    if (user) {
      this.isEdit = true;
      // Clone object to avoid direct table binding
      this.userForm = { ...user, password: '' }; // Don't show hash
    } else {
      this.isEdit = false;
      this.resetForm();
    }
  }

  closeModal() {
    this.showModal = false;
  }

  resetForm() {
    this.userForm = {
      id: null,
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      group_id: 2,
      active: 1,
      ip_address: '', created_on: 0, last_login: 0, company: '', phone: ''
    };
  }

  saveUser() {
    if (!this.userForm.username || !this.userForm.email) {
      this.errorMsg = 'Usuario y Email son requeridos';
      return;
    }

    this.loading = true;
    this.backend.saveUser(this.userForm).subscribe({
      next: (res) => {
        this.successMsg = this.isEdit ? 'Usuario actualizado' : 'Usuario creado';
        this.loadUsers();
        this.closeModal();
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Error guardando: ' + err.message;
        this.loading = false;
      }
    });
  }

  deleteUser(user: BackendUser) {
    if (confirm('¿Está seguro de eliminar a ' + user.username + '?')) {
      this.backend.deleteUser(user.id).subscribe({
        next: (res) => {
          this.loadUsers();
        },
        error: (err) => {
          alert('Error al eliminar: ' + err.message);
        }
      });
    }
  }
  getRoleName(groupId: number): string {
    switch (Number(groupId)) {
      case 1: return 'Admin';
      case 2: return 'Administrativo';
      case 3: return 'Deportivo';
      case 4: return 'Club';
      default: return 'Desconocido';
    }
  }

  getClubName(clubId: string | number): string {
    if (!clubId) return '-';
    const club = this.clubs.find(c => c.idclub == clubId);
    return club ? club.nombre : '-';
  }
}
