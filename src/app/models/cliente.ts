export class Cliente {
  constructor (
    public id: number,
    public nombreEmpresa: string,
    public image: string,
    public nombreContacto: string,
    public apellidosContacto: string,
    public correoEmpresa: string,
    public correoContacto: string,
    public telefonoEmpresa: string,
    public telefonoContacto: string,
    public calle: string,
    public numero: string,
    public codigoPostal: string,
    public localidad: string,
    public municipio: string,
    public estado: string,
  ) {}
}
