import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Federación Sanjuanina de Patín';
  tipoNav = 'navbar-light';
  colorFondo = 'bg-white';
  colorBarra = 'colorBarra';
  colorLetraBarra = 'colorLetraBarra';
}
