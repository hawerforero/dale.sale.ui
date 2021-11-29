import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  modelo :  Cliente;
  submitted = false;
  errorMsg = '';

  constructor(protected service: ClienteService,
              private htp: HttpClient,
              public router: Router,
              ) {
    
      this.modelo = new Cliente({
        cedula: "",
        nombre: "",
        apellido: "",
        telefono: ""
      });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.modelo)
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
            this.router.navigate(["/cliente"]);
            },
        error => {
          this.errorMsg = error.error;
        }
      )
    
  }


}
