import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  iframeUrl: any;
  contenedorIframeElement: string = "300px";
  paginaMapaUbicacion;
  paginaMapaClubes;
  //sanitizer: DomSanitizer;
  isApp = true;
  elements: HTMLElement[] = [];
  animatedElements: boolean[] = [];
  idGaleria: any;
  buscando: boolean;
  listado: any;
  titulo: string;
  descripcion: any;
  constructor(private sanitizer: DomSanitizer, private _route: ActivatedRoute, private http: ServicioService) {
    //this.sanitizer = _sanitizationService;
    this.idGaleria = this._route.snapshot.params.idGaleria;
    // this.paginaMapaUbicacion = this._sanitizationService.bypassSecurityTrustUrl();
    // console.log(this.paginaMapaUbicacion);
    this.verCategorias(this.idGaleria);
  }
  verCategorias(idGaleria) {
    this.buscando = true;
    this.http.getCategoria(121, idGaleria).subscribe(data => {
        this.buscando = false;
        this.listado = data;
        this.titulo = data[0]["category_name"];
        this.descripcion = data[0]["category_description"];

        // this.localStorageService = localStorage;
        // this.localStorageService.setItem('noticias', JSON.stringify(data));
        // console.log(data);
      });

  }
    getSanitizedResumen(resumen: string) {
    return this.sanitizer.bypassSecurityTrustHtml(resumen);
  }
  ngOnInit() {
    // this.paginaMapaUbicacion = this._sanitizationService.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.875080050006!2d-68.52661877308927!3d-31.52868492248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816a9cd383cce1%3A0x8bc065006444f32d!2sFederacion%20Sanjuanina%20de%20Patin!5e0!3m2!1ses-419!2sar!4v1616005534078!5m2!1ses-419!2sar');
    // this.paginaMapaClubes = this._sanitizationService.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54406.670879059515!2d-68.56419855159879!3d-31.54017054631031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sclubes%20hockey%20patin%20san%20juan!5e0!3m2!1ses-419!2sar!4v1612992929936!5m2!1ses-419!2sar" width="100%');
    // Selecciona los elementos que deseas animar
    this.elements = Array.from(document.querySelectorAll('.scroll-animation'));
    this.animatedElements = new Array(this.elements.length).fill(false);
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && !this.animatedElements[index]) {
        this.animatedElements[index] = true;
        element.classList.add('active'); // Agrega la clase para activar la animación
      }
    });
  }

  transform(url) {

  }
  frameurl() {
    let frame = document.getElementById('contenedor-iframe');
    //var iframeHeight = frame.scrollHeight;
    //console.log(iframeHeight);
    //this.contenedorIframeElement = `${iframeHeight.toString}px`;
    var a = this.sanitizer.bypassSecurityTrustResourceUrl('https://fspatin.com/descargas/Resoluciones/2024%20FSP%20Asambleas');
    return a;
  }
  onIframeLoad(){

  }
}
