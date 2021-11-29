export class Venta {

    public id: string | undefined;
    public clienteid: string | undefined;
    public productoid: string | undefined;
    public valorunitario: string | undefined;
    public valortotal: string | undefined;
    public cantidad: string | undefined;

    constructor(_parameters: any) {
      this.id = (_parameters?.id != null ? _parameters.id: undefined);
      this.clienteid = (_parameters?.clienteid != null ? _parameters.clienteid: undefined);
      this.productoid = (_parameters?.productoid != null ? _parameters.productoid: undefined);
      this.valorunitario = (_parameters?.valorunitario != null ? _parameters.valorunitario: undefined);
      this.valortotal = (_parameters?.valortotal != null ? _parameters.valortotal: undefined);
      this.cantidad = (_parameters?.cantidad != null ? _parameters.cantidad: undefined);

    }
  }
  