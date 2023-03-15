import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarClienteComponent } from './feature/cliente/adicionar-cliente/adicionar-cliente.component';
import { EditarClienteComponent } from './feature/cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './feature/cliente/listar-cliente/listar-cliente.component';
import { BuscarClienteComponent } from './feature/cliente/buscar-cliente/buscar-cliente.component';
import { BuscarServicoComponent } from './feature/servico/buscar-servico/buscar-servico.component';


const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'adicionar',
        component: AdicionarClienteComponent,
      },
      {
        path: 'editar/:cpf',
        component: EditarClienteComponent,
      },
      {
        path: 'listar',
        component: ListarClienteComponent,
      },
      {
        path: 'buscar',
        component: BuscarClienteComponent,
      }
      
    ]
    
  },
  {
    path: 'servico',
    children: [
      {
        path: 'adicionar',
        component: AdicionarServicoComponent,
      },
      {
        path: 'editar/:id',
        component: EditarServicoComponent,
      },
      {
        path: 'listar',
        component: ListarServicoComponent,
      },
      {
        path: 'buscar',
        component: BuscarServicoComponent,
      }
      
    ]
    
  }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
