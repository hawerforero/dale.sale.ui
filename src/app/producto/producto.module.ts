import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoRoutingModule } from './producto-routing.module';




@NgModule({
  declarations: [ProductoCreateComponent, ProductoEditComponent, ProductoListComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
