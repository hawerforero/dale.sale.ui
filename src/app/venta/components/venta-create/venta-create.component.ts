import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ProductoService } from 'src/app/producto/services/producto.service';
import { Venta } from '../../models/venta';
import { VentaService } from '../../services/venta.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-create',
  templateUrl: './venta-create.component.html',
  styleUrls: ['./venta-create.component.scss']
})
export class VentaCreateComponent implements OnInit {
  dtoProducto :  any;
  clientes;
  productos;
  ventaModel = new Venta({ });
  errorMsg = '';

  constructor(protected clienteService: ClienteService,
              protected productoService: ProductoService,
              protected ventaService: VentaService,
              public router: Router) {
    this.clientes = new Array<any>();
    this.productos = new Array<any>();
   }

  ngOnInit(): void {
    this.getListClientes();
    this.getListProductos();
  }

  getListClientes() {
    this.clienteService.getAll()
    .subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getListProductos() {
    this.productoService.getAll()
    .subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.ventaService.create(this.ventaModel)
      .subscribe(
        response => {
            Swal.fire({
              title: '¡ Respuesta Exitosa ! ',
              icon: 'success',
              text: response.message,
              confirmButtonText: 'Aceptar',
              showCancelButton: false,
              showCloseButton: false
            })
            this.router.navigate(["/venta"]);
            },
        error => {
          this.errorMsg = error.error;
        }
      )
    
  }

  changeProducto(id : string | undefined) {

    if(id != undefined){
      this.productoService.getById(id)
    .subscribe(
      (data) => {
        this.dtoProducto = data;
        this.ventaModel.valorunitario = this.dtoProducto.valor;
      },
      (error) => {
        console.error(error);
      }
    );
    }
  
  }

  changeCantidad() {

    var total =  Number(this.ventaModel.valorunitario)  *  Number(this.ventaModel.cantidad);
    this.ventaModel.valortotal = total.toString();
  
  }

}
