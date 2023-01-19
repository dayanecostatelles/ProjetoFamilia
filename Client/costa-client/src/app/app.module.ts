import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './feature/cliente/cliente.service.component';

import { AppComponent } from './app.component';
import { AdicionarClienteComponent } from './feature/cliente/adicionar-cliente/adicionar-cliente.component';
import { CommonModule } from '@angular/common';
import { EditarClienteComponent } from './feature/cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './feature/cliente/listar-cliente/listar-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    AdicionarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

    