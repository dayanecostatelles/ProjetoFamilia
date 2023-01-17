import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarClienteComponent } from './feature/cliente/adicionar-cliente/adicionar-cliente.component';


const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'adicionar',
        component: AdicionarClienteComponent,
      },
      
    ]
  },
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
