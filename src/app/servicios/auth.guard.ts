import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiciosamsService } from './serviciosams.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private authService: ServiciosamsService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isLogged()) {
      console.log('No estás logueado');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
