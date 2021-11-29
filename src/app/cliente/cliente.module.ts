import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClienteListComponent, ClienteEditComponent, ClienteCreateComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClienteModule { }
