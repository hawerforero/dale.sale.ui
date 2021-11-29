import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ProductoService } from 'src/app/producto/services/producto.service';
import { Venta } from '../../models/venta';
import { VentaService } from '../../services/venta.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venta-edit',
  templateUrl: './venta-edit.component.html',
  styleUrls: ['./venta-edit.component.scss']
})
export class VentaEditComponent implements OnInit {

  dtoProducto :  any;
  dto :  any;
  clientes;
  productos;
  ventaModel = new Venta({ });
  errorMsg = '';

  constructor(protected clienteService: ClienteService,
              protected productoService: ProductoService,
              protected ventaService: VentaService,
              public router: Router,
              private activeRoute: ActivatedRoute) {
    this.clientes = new Array<any>();
    this.productos = new Array<any>();
   }

  ngOnInit(): void {
    this.getListClientes();
    this.getListProductos();
    this.getById();
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
    this.ventaService.update(this.ventaModel)
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

  getById() {
    console.log(this.activeRoute.snapshot.params);
    this.ventaService.getById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (data) => {
        this.dto = data;
        console.log(this.dto);
        this.ventaModel = new Venta({
          id: this.dto.id,
          clienteid : this.dto.clienteId,
          productoid : this.dto.productoId,
          valorunitario : this.dto.valorUnitario,
          valortotal : this.dto.valorTotal,
          cantidad : this.dto.cantidad,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
