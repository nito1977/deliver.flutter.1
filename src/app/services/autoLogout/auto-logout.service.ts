import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

const MINUTES_UNITL_AUTO_LOGOUT = 30; // in mins
const CHECK_INTERVAL = 60000; // Check every 1 minute
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  public getLastAction() {
    // tslint:disable-next-line:radix
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(private router: Router, private authService: BackendService) {
    this.check();
    this.initListener();
    this.initInterval();
    if (!this.getLastAction()) {
      this.setLastAction(Date.now());
    }
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const lastAction = this.getLastAction();

    // If no user is logged in, no need to check or auto-logout
    if (!localStorage.getItem('currentUser')) {
      return;
    }

    const timeleft = lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      console.log('Session timed out. Logging out...');
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
