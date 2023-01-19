import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarClienteComponent } from './feature/cliente/adicionar-cliente/adicionar-cliente.component';
import { EditarClienteComponent } from './feature/cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './feature/cliente/listar-cliente/listar-cliente.component';


const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'adicionar',
        component: AdicionarClienteComponent,
      },
      {
        path: 'editar',
        component: EditarClienteComponent,
      },
      {
        path: 'listar',
        component: ListarClienteComponent,
      }
      
    ]
    
  },
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
