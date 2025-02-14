// import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Route, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule, BrowserXhr } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { ServicioService } from './servicios/servicio.service';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { LoaderComponent } from './componentes/utiles/loader/loader.component';
import { UserService } from './services/user/user.service';

// import { FocusDirective } from './componentes/utiles/focus/focus.directive';
import { ModalComponent } from './componentes/utiles/modal/modal.component';
import { TablaComponent } from './tabla/tabla.component';
// import { TruncateModule } from 'ng2-truncate';

import { MenuComponent } from './menu/menu.component';
import { AmsnoticiasComponent } from './amsnoticias/amsnoticias.component';
import { PushService } from './servicios/push.service';
import { CanActivateViaAuthGuard } from './servicios/auth.guard';
import { BotonvolverComponent } from './componentes/utiles/botonvolver/botonvolver.component';
import { LoaderchicoComponent } from './componentes/utiles/loaderchico/loaderchico.component';
import { PartidosComponent } from './partidos/partidos.component';
import { BoletinComponent } from './boletin/boletin.component';
import { PartidoslistComponent } from './partidoslist/partidoslist.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PartidoComponent } from './partido/partido.component';
import { PartidodetalleComponent } from './partidodetalle/partidodetalle.component';
import { TabladetalleComponent } from './tabladetalle/tabladetalle.component';
import { PartidoeventosComponent } from './partidoeventos/partidoeventos.component';
import { BotonlinkComponent } from './componentes/utiles/botonlink/botonlink.component';
import { AmscardcarrouselComponent } from './amscardcarrousel/amscardcarrousel.component';
import { AmsclubessliderComponent } from './amsclubesslider/amsclubesslider.component';
import { AmsmapsComponent } from './amsmaps/amsmaps.component';
import { CuotasformComponent } from './cuotasform/cuotasform.component';
import { FileuploadService } from './services/fileupload.service';
import { AmsbotonesutilesComponent } from './amsbotonesutiles/amsbotonesutiles.component';
import { HistorialComponent } from './historial/historial.component';
import { AmsgaleriasComponent } from './amsgalerias/amsgalerias.component';
import { DescargasComponent } from './descargas/descargas.component';
import { AmscampstatsComponent } from './amscampstats/amscampstats.component';
import { TabladetalleCompactoComponent } from './tabladetallecompacto/tabladetallecompacto.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CampeonatosComponent,
    LoginComponent,
    ModalComponent,
    AdminComponent,
    LoaderComponent,
    LoaderchicoComponent,
    TablaComponent,
    MenuComponent,
    AmsnoticiasComponent,
    BotonvolverComponent,
    PartidosComponent, BoletinComponent, PartidoslistComponent, PaginaComponent, PartidoComponent, PartidodetalleComponent,
    TabladetalleComponent, PartidoeventosComponent, BotonlinkComponent,
    AmscardcarrouselComponent, AmsclubessliderComponent, AmsmapsComponent, AmsbotonesutilesComponent,
    CuotasformComponent,HistorialComponent, AmsgaleriasComponent,
    DescargasComponent, AmscampstatsComponent, TabladetalleCompactoComponent

  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
     ],
  exports: [ HttpClientModule ],
  providers: [ServicioService, UserService, PushService, CanActivateViaAuthGuard, FileuploadService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
