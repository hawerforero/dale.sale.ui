import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  items;
  errorMsg = '';

  constructor(protected service: ClienteService,
              public router: Router) {
    this.items = new Array<any>();
   }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.getAll()
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
    this.service.delete(id)
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
          this.router.navigate(["/cliente"]);
          this.getList();

        },
        error => {
          this.errorMsg = error.error;
        }
      )

  }
  
}
