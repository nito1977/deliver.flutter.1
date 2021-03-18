import { Time } from "@angular/common";

export class Cuotas {
    constructor(
    public id:        string,
    public dni:       string,
    public lic:       number,
    public cuotames:  number,
    public cuotaanio: number,
    public fecha:     Date,
    public hora:      Time,
    public nrocomp:   string,
    public email:     string,
    public telefono:  string,
    public adjunto:   string,
    public importe:   number
    ) {}
}
