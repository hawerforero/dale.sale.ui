import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../services/venta.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.scss']
})
export class VentaListComponent implements OnInit {

  items;
  errorMsg = '';

  constructor(protected ventaService: VentaService,
              public router: Router) {
    this.items = new Array<any>();
   }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.ventaService.getAll()
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
    this.ventaService.delete(id)
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
