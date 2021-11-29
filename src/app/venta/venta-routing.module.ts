import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaListComponent } from './components/venta-list/venta-list.component';
import { VentaEditComponent } from './components/venta-edit/venta-edit.component';
import { VentaCreateComponent } from './components/venta-create/venta-create.component';

const routes: Routes = [
  {
    path: '',
    component: VentaListComponent,
  },
  {
    path: ':id/edit',
    component: VentaEditComponent,
  },
  {
    path: 'create',
    component: VentaCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VentaRoutingModule { }
