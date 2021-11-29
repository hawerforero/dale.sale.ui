import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoListComponent,
  },
  {
    path: ':id/edit',
    component: ProductoEditComponent,
  },
  {
    path: 'create',
    component: ProductoCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductoRoutingModule { }
