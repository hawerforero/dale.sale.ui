import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos;
  errorMsg = '';

  constructor(protected productoService: ProductoService) {
    this.productos = new Array<any>();
   }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
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

  deleteActivo(id:string) {
  }
    


}
