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
  public listado;
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
  URL = "https://fspatin.com/paginas/cuotas/";
  debug = true;
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
      this.cuota = new Cuotas(null,'',0,0,0,null,null,'','','264','',0);
    
    } else {
      this.jugador = new Jugador(8156,1,null,'Apellido','Nombre',null,'DNI','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
      this.cuota = new Cuotas(null,'',8156,2,2021,null,null,'1234564','nito_r@yahoo.com.ar','2644696298','aasdasdas.pdf',0);
    }
     // this.user = new Usuarios('', '', 0);
    this.bloquear = false;
  }

  ngOnInit(): void {
    this.cuotasFormG = this.formBuilder.group({});
  }
  resetForm(){
    this.cuotasFormG.reset();
    //this.jugador = Jugador(0,0,null,'','',null,'','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);this.jugador = new Jugador(0,0,null,'','',null,'','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
    //this.jugador = Jugador(8156,1,null,'Apellido','Nombre',null,'DNI','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);this.jugador = new Jugador(0,0,null,'','',null,'','48.829.450','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
    this.cuota = new Cuotas(null,'',0,0,0,null,null,'','','','',0);
    this.jugador = new Jugador(0,0,null,'','',null,'','','','','','','','','','','','','','','','','','','','','','',null,'','','','',0,0,false,0,0,false);
    
  }
  ngSubmit() {
      this.cuota.dni = this.listado.Documento;
      this.bloquear = true;
      //alert('submit');
      this.http.InsertaCuotaPaga(15, this.cuota)
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
            
          // alert('datos cargados!')
        // this.http.setearNombreUsuario(this.listado[0].nombre);
          //this._router.navigate(['/menu']);
          }
        },
        error => {
            this.bloquear = false;
            this.estatus = true;
            this.tituloEstatus = 'No dispone de conexion a internet o no se guardaron los cambios!';
            console.log(<any>error);
        });
      
  }
  ngJugadorBuscar() {
    if (this.jugador.documento != ''){
      this.bloquear = true;
      this.http.jugadorxDni(56, this.jugador.documento).subscribe(data => {
          this.bloquear = false;
          if (data[0] === undefined) {
            this.estatus = true;
            this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
          } else {
          this.listado = data[0];
          
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
  seleccionarArchivo(event, form, mes, anio) {
    
    var files = event.target.files;
    var file = files[0];
    if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/HEIC' || file.type === 'image/png'){
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
    
    alert(this.archivo);
    this.uploadService.uploadFile(this.archivo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
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
