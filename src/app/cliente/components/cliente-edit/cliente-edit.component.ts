import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  dto :  any;
  modelo :  Cliente;
  submitted = false;
  errorMsg = '';

  constructor(protected clienteService: ClienteService,
    private activeRoute: ActivatedRoute,
    public router: Router) {
    
      this.modelo = new Cliente({
        cedula: "",
        nombre: "",
        apellido: "",
        telefono: ""
      });
}

  ngOnInit(): void {
    this.getById();
  }
  onSubmit() {
    this.submitted = true;
    this.clienteService.update(this.modelo)
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

  getById() {
    this.clienteService.getById(this.activeRoute.snapshot.params['id'])
    .subscribe(
      (data) => {
        this.dto = data;
        this.modelo = new Cliente({
          id: this.dto.id,
          cedula: this.dto.cedula,
          nombre : this.dto.nombre,
          apellido : this.dto.apellido,
          telefono : this.dto.telefono,

        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
