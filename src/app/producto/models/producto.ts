export class Producto {

  public id: string | undefined;
  public nombre: string | undefined;
  public valor: string | undefined;
   

  constructor(_parameters: any) {
    this.id = (_parameters?.id != null ? _parameters.id: undefined);
    this.nombre = (_parameters?.nombre != null ? _parameters.nombre: undefined);
    this.valor = (_parameters?.valor != null ? _parameters.valor: undefined);
    
  }
}
