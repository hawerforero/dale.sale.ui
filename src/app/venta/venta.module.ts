import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaListComponent } from './components/venta-list/venta-list.component';
import { VentaEditComponent } from './components/venta-edit/venta-edit.component';
import { VentaCreateComponent } from './components/venta-create/venta-create.component';
import { VentaRoutingModule } from './venta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VentaListComponent, VentaEditComponent, VentaCreateComponent],
  imports: [
    CommonModule,
    VentaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VentaModule { }
