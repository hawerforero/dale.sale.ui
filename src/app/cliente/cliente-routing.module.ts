import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListComponent,
  },
  {
    path: ':id/edit',
    component: ClienteEditComponent,
  },
  {
    path: 'create',
    component: ClienteCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule { }
