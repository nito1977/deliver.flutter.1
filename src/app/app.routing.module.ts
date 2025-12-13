import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampeonatosComponent } from './campeonatos/campeonatos.component';

import { LoginComponent } from './login/login.component';
import { TablaComponent } from './tabla/tabla.component';
import { MenuComponent } from './menu/menu.component';


import { AmsnoticiasComponent } from './amsnoticias/amsnoticias.component';
import { AppComponent } from './app.component';
import { CanActivateViaAuthGuard } from './servicios/auth.guard';
import { PartidosComponent } from './partidos/partidos.component';
import { BoletinComponent } from './boletin/boletin.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PartidoComponent } from './partido/partido.component';
import { PartidodetalleComponent } from './partidodetalle/partidodetalle.component';
import { TabladetalleComponent } from './tabladetalle/tabladetalle.component';
import { PartidoeventosComponent } from './partidoeventos/partidoeventos.component';
import { CuotasformComponent } from './cuotasform/cuotasform.component';
import { HistorialComponent } from './historial/historial.component';
import { AmsgaleriasComponent } from './amsgalerias/amsgalerias.component';
import { DescargasComponent } from './descargas/descargas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TabladetalleCompactoComponent } from './tabladetallecompacto/tabladetallecompacto.component';
import { AmsnoticiaComponent } from './amsnoticia/amsnoticia.component';
import { AmsvideoComponent } from './amsvideo/amsvideo.component';
import { AmsbannersComponent } from './amsbanners/amsbanners.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClubComponent } from './club/club.component';

const appRoutes: Routes = [
  { path: '', component: PaginaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'noticias', component: AmsnoticiasComponent },
  { path: 'noticia/:idGaleria', component: AmsnoticiaComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:idGaleria', component: CategoriaComponent },
  { path: 'club/:idGaleria', component: ClubComponent, pathMatch: 'full' },
  { path: 'banner/:idGaleria', component: AmsbannersComponent },
  { path: 'video/:idVideo', component: AmsvideoComponent },
  { path: 'galeria/:idGaleria', component: AmsgaleriasComponent },
  { path: 'tabla/:idcamp/:iddiv/:idzona', component: TablaComponent },
  { path: 'tabla/:idcamp/:iddiv/:idzona/:idFecha', component: TablaComponent },
  { path: 'partidos/:idcamp/:iddiv/:idzona/:idFecha/:idInst', component: PartidosComponent, pathMatch: 'full' },
  { path: 'partidosevento/:idcamp/:iddiv/:idevento', component: PartidoeventosComponent, pathMatch: 'full' },
  { path: 'partido/:idPartido', component: PartidoComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'historial/:idJugador', component: HistorialComponent },
  { path: 'partidodet/:idPartido', component: PartidodetalleComponent },
  { path: 'tabladet', component: TabladetalleComponent },
  { path: 'tabladetcom', component: TabladetalleCompactoComponent },
  { path: 'boletines/', component: BoletinComponent },
  { path: 'boletines/:idAnio/:idBoletin/:idMes', component: BoletinComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'cuotas', component: CuotasformComponent },
  { path: 'descargas', component: DescargasComponent },
  { path: 'descargas/:lnk', component: DescargasComponent },
  { path: '**', component: PaginaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true, anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' } // <-- debugging purposes only
      // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


