import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelService } from '../../../services/panel.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
    @Input() playerId: string;
    playerForm: FormGroup;
    isLoading: boolean = false;
    isSaving: boolean = false;

    constructor(
        private fb: FormBuilder,
        private panelService: PanelService
    ) {
        this.playerForm = this.fb.group({
            idnumerocarnet: [{ value: '', disabled: true }],
            Documento: ['', Validators.required],
            Apellido: ['', Validators.required],
            Nombre: ['', Validators.required],
            Fecnac: ['', Validators.required],
            club: [''],
            Nacionalidad: [''],
            Sexo: [''],
            Domicilio: [''],
            Localidad: [''],
            CodigoPostal: [''],
            Provincia: [''],
            Telefono: [''],
            Federacion: [''],
            Disciplina: [''],
            Actividad: [''],
            ObraSocial: [''],
            Email: [''],
            RAMA: ['']
        });
    }

    ngOnInit() {
        if (this.playerId) {
            this.loadPlayer();
        }
    }

    loadPlayer() {
        this.isLoading = true;
        this.panelService.getPlayer(this.playerId).subscribe({
            next: (data) => {
                this.isLoading = false;
                if (data) {
                    // Format date for display: mm/dd/yyyy (matching backend update format expectations)
                    let formattedDate = '';
                    if (data.Fecnac) {
                        const date = new Date(data.Fecnac);
                        if (!isNaN(date.getTime())) {
                            const day = String(date.getDate()).padStart(2, '0');
                            const month = String(date.getMonth() + 1).padStart(2, '0');
                            const year = date.getFullYear();
                            formattedDate = `${month}/${day}/${year}`;
                        }
                    }

                    this.playerForm.patchValue({
                        idnumerocarnet: data.idnumerocarnet,
                        Documento: data.Documento,
                        Apellido: data.Apellido,
                        Nombre: data.Nombre,
                        Fecnac: formattedDate,
                        club: data.clubActual,
                        Nacionalidad: data.Nacionalidad,
                        Sexo: data.Sexo,
                        Domicilio: data.Domicilio,
                        Localidad: data.Localidad,
                        CodigoPostal: data.CodigoPostal,
                        Provincia: data.Provincia,
                        Telefono: data.Telefono,
                        Federacion: data.Federacion,
                        Disciplina: data.Disciplina,
                        Actividad: data.Actividad,
                        ObraSocial: data['Obra Social'],
                        Email: data.Email,
                        RAMA: data.RAMA
                    });
                }
            },
            error: (error) => {
                this.isLoading = false;
                console.error('Error loading player:', error);
            }
        });
    }

    onSubmit() {
        if (this.playerForm.valid) {
            this.isSaving = true;
            const rawData = this.playerForm.getRawValue();

            // Map the form fields to the keys expected by the backend
            const payload = {
                ...rawData,
                'Obra Social': rawData.ObraSocial
            };

            // Debug log to see exactly what is being sent
            console.log('Sending update payload:', payload);

            this.panelService.updatePlayer(payload).subscribe({
                next: (res) => {
                    this.isSaving = false;
                    console.log('Received response from server:', res);

                    if (res && res.status === 'success') {
                        Swal.fire({
                            title: '¡Éxito!',
                            text: 'Los datos del jugador han sido modificados correctamente.',
                            icon: 'success',
                            confirmButtonColor: '#0d6efd'
                        });
                    } else {
                        Swal.fire({
                            title: 'Atención',
                            text: 'El servidor no devolvió una confirmación exitosa: ' + (res?.message || 'Respuesta desconocida'),
                            icon: 'warning',
                            confirmButtonColor: '#ffc107'
                        });
                    }
                },
                error: (err) => {
                    this.isSaving = false;
                    console.error('Update error:', err);
                    Swal.fire({
                        title: 'Error Crítico',
                        text: 'Ocurrió un error al comunicarse con el servidor.',
                        icon: 'error',
                        confirmButtonColor: '#dc3545'
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Formulario Incompleto',
                text: 'Por favor complete todos los campos obligatorios.',
                icon: 'info'
            });
        }
    }
}
