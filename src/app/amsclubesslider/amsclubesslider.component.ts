import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-amsclubesslider',
  templateUrl: './amsclubesslider.component.html',
  styleUrls: ['./amsclubesslider.component.css']
})



export class AmsclubessliderComponent implements OnInit {
  buscando: boolean;
  idGaleria: any;
  listado: any;
  constructor(private http: ServicioService) { }

  ngOnInit(): void {
    this.verClubes(121);
  }
verClubes(idGaleria) {
    this.buscando = true;
    this.http.getCategoria(30, idGaleria).subscribe(data => {
        this.buscando = false;
        this.listado = data;
        // this.titulo = data[0]["category_name"];
        // this.descripcion = data[0]["category_description"];

        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }
}
