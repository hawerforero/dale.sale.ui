export class Cliente {

    public id: string | undefined;
    public cedula: string | undefined;
    public nombre: string | undefined;
    public apellido: string | undefined;
    public telefono: string | undefined;
     
  
    constructor(_parameters: any) {
      this.id = (_parameters?.id != null ? _parameters.id: undefined);
      this.cedula = (_parameters?.cedula != null ? _parameters.cedula: undefined);
      this.nombre = (_parameters?.nombre != null ? _parameters.nombre: undefined);
      this.apellido = (_parameters?.apellido != null ? _parameters.apellido: undefined);
      this.telefono = (_parameters?.telefono != null ? _parameters.telefono: undefined);
      
    }
  }
  