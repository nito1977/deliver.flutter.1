import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators'; import { AutoLogoutService } from './services/autoLogout/auto-logout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Federación Sanjuanina de Patín';
  tipoNav = 'navbar-light';
  colorFondo = 'bg-white';
  colorBarra = 'colorBarra';
  colorLetraBarra = 'colorLetraBarra';
  showNavbar = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autoLogout: AutoLogoutService // Initialize listeners and interval
  ) {

  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => { // Type cast event
      // Check if current route is panel
      this.showNavbar = !event.urlAfterRedirects.includes('/panel');

      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
