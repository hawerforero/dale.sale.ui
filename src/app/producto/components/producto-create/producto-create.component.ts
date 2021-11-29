import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.scss']
})
export class ProductoCreateComponent implements OnInit {
  model :  Producto;
  submitted = false;
  errorMsg = '';

  constructor(protected productoService: ProductoService,
              private http: HttpClient,
              public router: Router,
              ) {
    
      this.model = new Producto({});
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.productoService.create(this.model)
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
          this.errorMsg = "No es posible inertar el activo";
        }
      )
    
  }


}
