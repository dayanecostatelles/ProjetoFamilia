import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { ClienteService } from '../cliente.service.component';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

    @Input() listaClientes?: ICliente[];
  
    clientesBuscados:ICliente[] = [] as ICliente[];
    cpfCliente: string ='';
    dadosEncontrados?:boolean;
 

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.buscarClientes();
  }
  public deletar(event:Event, cpf:any) : void {
    this.service.deletarCliente(cpf).pipe(take(1)).subscribe(
      () => { 
        alert('Cliente deletado com sucesso!')
       this.buscarClientes();
      } );

    
  }  
buscarClientes() : void {  
  this.service.buscarClientes()
  .pipe(take(1))
  .subscribe((dados) => {
    if(dados){
      this.clientesBuscados = dados;
      debugger;
      this.dadosEncontrados = true;

    }        
  }); 
}
}