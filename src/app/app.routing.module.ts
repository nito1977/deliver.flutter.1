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

const appRoutes: Routes = [
  { path: '', component: PaginaComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'noticias', component: AmsnoticiasComponent},
  { path: 'tabla/:idcamp/:iddiv/:idzona', component: TablaComponent},
  { path: 'partidos/:idcamp/:iddiv/:idzona/:idFecha/:idInst', component: PartidosComponent, pathMatch: 'full'},
  { path: 'partidosevento/:idcamp/:iddiv/:idevento', component: PartidoeventosComponent, pathMatch: 'full'},
  { path: 'partido/:idPartido', component: PartidoComponent},
  { path: 'partidodet/:idPartido', component: PartidodetalleComponent},
  { path: 'tabladet', component: TabladetalleComponent},
  { path: 'boletines/', component: BoletinComponent},
  { path: 'boletines/', component: BoletinComponent},
  { path: 'boletines/:idAnio/:idBoletin/:idMes', component: BoletinComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cuotas', component: CuotasformComponent },
  { path: '**', component: PaginaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true, onSameUrlNavigation: 'reload'} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


