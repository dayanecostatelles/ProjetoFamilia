import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './feature/cliente/cliente.service.component';

import { AppComponent } from './app.component';
import { AdicionarClienteComponent } from './feature/cliente/adicionar-cliente/adicionar-cliente.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AdicionarClienteComponent,
    
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

    