import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiciosamsService } from '../servicios/serviciosams.service';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.css'],
  standalone: false
})
export class InstagramCarouselComponent implements OnInit {
  public listado: any[] = [];
  public urlimgs = 'https://fspatin.com/web/wp-content/uploads';

  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  constructor(private http: ServicioService) { }

  ngOnInit(): void {
    this.fetchNoticias();
  }

  fetchNoticias() {
    this.http.getNoticias(118, 6).subscribe((data: any) => {
      this.listado = data;
      //console.log(this.listado);
    });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}