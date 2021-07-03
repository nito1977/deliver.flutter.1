import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user/user.service';
import { Usuarios } from '../models/usuarios';
import { Jugador} from '../models/jugador';
import { ServicioService } from '../servicios/servicio.service';
import { Cuotas } from '../models/cuotas';
import { FileuploadService } from '../services/fileupload.service';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cuotasform',
  templateUrl: './cuotasform.component.html',
  styleUrls: ['./cuotasform.component.css']
})
export class CuotasformComponent implements OnInit {
  public titulo = 'Aviso de Pago de Licencia';
  public user: Usuarios;
  public jugador: Jugador;
  public cuota: Cuotas;
  public documento: String;
  public mesagge: String;
  public status: Boolean;
  tituloEstatus = '';
  public identity;
  public estatus: Boolean = false;
  public tocken;
  public bloquear = false;
  public archivoSubido = false;
  public listado;
  public cuotasVerificadas;
  transferencia = false;
  public linkPagoAquiCobro = '';
  colorLetraLogin = 'colorLetraLogin';
  colorFondoLogin = 'colorFondoLogin';
  colorInputLogin = 'colorInputLogin';
  colorLabelsLogin = 'colorLabelsLogin';
  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  }
  uploadForm: FormGroup;
  cuotasFormG: FormGroup;
  cuotasForm: FormGroup;
  URL = "https://fspatin.com/paginas/cuotas/";
  c1 = '600';
  c2 = '600';
  c3 = '600';
  c4 = '600';
  c5 = '600';
  c6 = '600';
  vc1 = '25/4/2021';
  vc2 = '15/5/2021';
  vc3 = '15/6/2021';
  vc4 = '15/7/2021';
  vc5 = '15/8/2021';
  vc6 = '15/9/2021';
  debug = false;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private http: ServicioService,
    private uploadService: FileuploadService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    if (!this.debug) {
      this.jugador = new Jugador(0,0,null,'','',null,'','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
      this.cuota = new Cuotas(null,'',null,null,null,null,null,null,null,'264','',null);

    } else {
      this.jugador = new Jugador(8156,1,null,'Apellido','Nombre',null,'DNI','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
      //this.cuota = new Cuotas(null,'',8156,2,2021,null,null,'1234564','nito_r@yahoo.com.ar','2644696298','aasdasdas.pdf',0);
    }
     // this.user = new Usuarios('', '', 0);
    this.bloquear = false;
  }

  ngOnInit(): void {
    this.cuotasFormG = this.formBuilder.group({});
    this.cuotasForm = this.formBuilder.group({});
    this.cuota.importe = 600;
  }
  resetForm(){
    this.cuotasFormG.reset();
    this.cuotasForm.reset();
    //this.jugador = Jugador(0,0,null,'','',null,'','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);this.jugador = new Jugador(0,0,null,'','',null,'','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
    //this.jugador = Jugador(8156,1,null,'Apellido','Nombre',null,'DNI','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);this.jugador = new Jugador(0,0,null,'','',null,'','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
    this.cuota = new Cuotas(null,'',0,0,0,null,null,'','','','',0);
    this.jugador = new Jugador(0,0,null,'','',null,'','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);

  }
  ngSubmit() {
      this.cuota.dni = this.jugador.documento;
      this.cuota.lic = this.listado.idnumerocarnet;
      this.bloquear = true;
      let c = this.cuota;
      //alert('submit');
      if (this.cuota.adjunto != '' && this.archivoSubido == false ) {
        this.uploadService.uploadFile(this.archivo).subscribe(
          datos => {
            if(datos['resultado'] == 'OK') {
              alert(datos['mensaje']);
              this.archivoSubido = true;
              if (this.cuota.cuotames > 0 && this.cuota.cuotaanio > 0 && this.cuota.importe > 0){
                this.http.InsertaCuotaPaga(15, c)
                .subscribe(
                  data => {
                    this.bloquear = false;

                    if (data['resultado'] === 'OK') {
                      alert(data['mensaje']);
                      this.listado = null;
                      //form.reset();
                      //this.formBuilder.re
                    } else {
                      this.estatus = true;
                      alert(data['mensaje']);
                      this.listado = null;
                      this.tituloEstatus = data['mensaje'];
                      this.resetForm();

                    // alert('datos cargados!')
                  // this.http.setearNombreUsuario(this.listado[0].nombre);
                    //this._router.navigate(['/menu']);
                    }
                  },
                  error => {
                      this.bloquear = false;
                      this.estatus = true;
                      this.listado = null;
                      this.tituloEstatus = 'No dispone de conexion a internet o no se guardaron los cambios!';
                      console.log(<any>error);
                  });
                } else {
                  this.bloquear = false;

                  alert('faltan datos requeridos');
                }



            } else {
              alert(datos['mensaje']);

            }
            this.bloquear = false;
          }
        )};
  }
  habilitar(bande: boolean){
    this.transferencia = true;
  }
  ngJugadorBuscar() {
    if (this.jugador.documento != ''){
      this.bloquear = true;
      this.http.jugadorxDni(57, this.jugador.documento).subscribe(data => {
          this.bloquear = false;
          if (data[0] === undefined) {
            this.estatus = true;
            this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
          } else {
          this.listado = data[0];
          this.verificaCuotas();
        // this.http.setearNombreUsuario(this.listado[0].nombre);
          //this._router.navigate(['/menu']);
          }
        },
        error => {
            this.bloquear = false;
            this.estatus = true;
            this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
            console.log(<any>error);
        });
      } else {
        this.estatus = true;
        this.tituloEstatus = 'Debe ingresar su D.N.I para buscar';
      }

  }
  verificaCuotas(){
    if (this.jugador.documento != '') {
      this.cuotasVerificadas = null;
      this.bloquear = true;
      this.http.jugadorCuotasxDni(17, this.jugador.documento).subscribe(data => {
          this.bloquear = false;
          console.log(data);
          if (data[0] === undefined) {
            this.estatus = true;
            this.tituloEstatus = 'No ha enviado ningún aviso de pago!';
          } else {
          this.cuotasVerificadas = data;

        // this.http.setearNombreUsuario(this.listado[0].nombre);
          //this._router.navigate(['/menu']);
          }
        },
        error => {
            this.bloquear = false;
            this.estatus = true;
            this.tituloEstatus = 'No ha enviado ningún aviso de pago o no hay conexion!';
            console.log(<any>error);
        });
      } else {
        this.estatus = true;
        this.tituloEstatus = 'Debe ingresar su D.N.I para buscar';
      }
  }
  seleccionarArchivo(event, form, mes, anio) {

    var files = event.target.files;
    var file = files[0];
    if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/HEIC' || file.type === 'image/png' || file.type === 'application/pdf'){
      this.archivo.nombreArchivo = this.listado.idnumerocarnet + '-' + this.cuota.cuotames + '-' + this.cuota.cuotaanio + '-' + file.name;

      if(files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
      this.cuota.adjunto = this.archivo.nombreArchivo;
      /*if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.uploadForm.get('profile').setValue(file);
      }*/
    } else {
      alert('formato de imagen no permitido');
      event.target.files[0] = null;
      this.cuota.adjunto = null;
    }
  }

  _handleReaderLoaded(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
    this.bloquear = true;

    //alert(this.archivo);
    this.archivoSubido = false;
    this.uploadService.uploadFile(this.archivo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.archivoSubido = true;
        } else {
          alert(datos['mensaje']);

        }
        this.bloquear = false;
      }
    );
    /*
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    */
  }


}
