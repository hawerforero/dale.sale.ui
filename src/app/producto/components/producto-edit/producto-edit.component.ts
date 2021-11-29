import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {
  dto :  any;
  model :  Producto;
  submitted = false;
  errorMsg = '';

  constructor(protected productoService: ProductoService,
              private activeRoute: ActivatedRoute,
              public router: Router,) {
    this.model = new Producto({});
   }

  ngOnInit(): void {
    this.getById();
  }

  onSubmit() {
    this.submitted = true;
    this.productoService.update(this.model)
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
            this.router.navigate(["/producto"]);
            },
        error => {
          console.log("Error en base de datos");
          this.errorMsg = "No es posible inertar";
        }
      )
  }

  getById() {
    this.productoService.getById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (data) => {
        this.dto = data;
        this.model = new Producto({
          id: this.dto.id,
          nombre : this.dto.nombre,
          valor : this.dto.valor,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
