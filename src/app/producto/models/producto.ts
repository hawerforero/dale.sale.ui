export class Producto {

  public nombre: string | undefined;
  public valor: string | undefined;
   

  constructor(_parameters: any) {
    this.nombre = (_parameters?.nombre != null ? _parameters.nombre: undefined);
    this.valor = (_parameters?.valor != null ? _parameters.valor: undefined);
    
  }
}
