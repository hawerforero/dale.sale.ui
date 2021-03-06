import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  items;
  errorMsg = '';

  constructor(protected productoService: ProductoService,
              public router: Router) {
    this.items = new Array<any>();
   }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productoService.getAll()
    .subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id:string) {
    console.log(id);
    this.productoService.delete(id)
      .subscribe(
        response => {
          Swal.fire({
            title: '¡ Respuesta Exitosa ! ',
            icon: 'success',
            text: '',
            confirmButtonText: 'Aceptar',
            showCancelButton: false,
            showCloseButton: false
          })
          this.router.navigate(["/producto"]);
          this.getList();
        },
        error => {
          this.errorMsg = error.error;
        }
      )

  }
  
}
