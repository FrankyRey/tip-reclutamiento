export class User{
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public role: string,
    public email: string,
    public password: string,
    public descripcion: string,
    public image: string
  ) {}
}
