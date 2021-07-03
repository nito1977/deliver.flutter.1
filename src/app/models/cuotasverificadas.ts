export class IntVerificaCuotas{
  constructor (
    public id: number,
    public dni: string,
    public lic: number,
    public cuotames: number,
    public cuotaanio: number,
    public fecha: string,
    public hora: string,
    public nrocomp: string,
    public email: string,
    public telefono: string,
    public adjunto: string,
    public importe: string,
    public verificada: string,
    public usuario: string
  ) { }
}
