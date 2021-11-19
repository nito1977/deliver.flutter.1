import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  detalleHistorial:any
  buscando: boolean;
  encontrado: boolean
  eventoimg: string = '';
  Jugador: string = '';
  contador: any[] = []
  mForm: FormGroup;
  constructor(
    private _http: ServicioService,
    private _route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {


    this.encontrado = false
    this.initializeForm()

  }
  determinaEvento(e: number): boolean {
    const thisce = this;
    if (e === 1) { thisce.eventoimg = 'gol.png'; }
    if (e === 2) { thisce.eventoimg = 'amarilla.jpg'; }
    if (e === 3) { this.eventoimg = 'azul.png'; }
    if (e === 4) { this.eventoimg = 'roja.png'; }
    return true;
  }
  cuentaEvento(): boolean {
    this.contador = [[1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 0, 0]];
    var _c: any[] = []
    _c = [[1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 0, 0]];

    this.detalleHistorial.forEach(element => {
      var i : number = 0
      i = element.estado
      _c[1][i] = _c[1][i]  +  element.suma
    });

    this.contador = _c
    return true;
  }
  Limpiar(){
    this.encontrado = false;
    this.mForm.get('idLic').setValue('')

  }
  Buscar(event: any){
    var idLic: number
    idLic = this.mForm.get('idLic').value
    this.buscando = true
    this._http.historialxJug(20, idLic).subscribe(data => {
      this.detalleHistorial = data;
      this.buscando = true;
      this.encontrado = true

      if (data.length <= 0) {
        alert('no encontro nada');
        this.encontrado = false
        this.buscando = false

      } else {
        this.Jugador = data[0]['Apellido'] + ', ' + data[0]['NombreJug']

        this.cuentaEvento()
        this.buscando = false
        /* this.nomCampeonato = data[0].Nombre;
        this.divCampeonato = data[0].Cate; */
        //this.idFecha = data[0].Fecha;
        // alert (this.nomCampeonato);
      }
    });
  }
  initializeForm() {
    // Transport unit cannot resume...
    new Promise<void>((resolve, reject) => {
        this.createForm();
        resolve();
    })
        .then(() => {
            return 'done';
        })
        .then(() => {
            return 'done-setup-form';
        });
    }
  createForm() {
    this.mForm = this.formBuilder.group({
      idLic: [''],
    });
}

}
