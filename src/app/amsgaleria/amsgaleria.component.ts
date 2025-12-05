import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

@Component({
  selector: 'app-amsgaleria',
  templateUrl: './amsgaleria.component.html',
  styleUrls: ['./amsgaleria.component.css']
})
export class AmsgaleriaComponent implements OnInit {

  @Input() idGaleria: string | number;
  videos: Video[] = [];
  currentVideo: Video | null = null;
  safeUrl: SafeResourceUrl | null = null;
  urlimgs = 'https://fspatin.com/web/wp-content/uploads/';

  constructor(
    private sanitizer: DomSanitizer,
    private servicio: ServicioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.idGaleria) {
      this.loadVideos(this.idGaleria.toString());
    } else {
      this.route.params.subscribe(params => {
        const id = params['idGaleria'];
        if (id) {
          this.loadVideos(id);
        }
      });
    }
  }

  loadVideos(idGaleria: string): void {
    this.servicio.getNoticias(118, idGaleria).subscribe(data => {
      if (data && data.length > 0) {
        this.videos = data.map(item => ({
          id: item.id.toString(),
          title: this.getFirstParagraph(item.resumen ? item.resumen.toString() : ''),
          thumbnail: this.urlimgs + item.foto1,
          url: item.titulo ? item.titulo.toString() : '' // The URL is in the 'titulo' field as per requirement
        }));
        this.selectVideo(this.videos[0]);
      }
    });
  }

  getFirstParagraph(resumen: string): string {
    if (!resumen) return '';
    const firstParagraph = resumen.match(/<p>(.*?)<\/p>/);
    return firstParagraph ? firstParagraph[1] : resumen;
  }

  selectVideo(video: Video): void {
    this.currentVideo = video;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
  }
}