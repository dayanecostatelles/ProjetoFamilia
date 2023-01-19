import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { ClienteService } from '../cliente.service.component';


@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

    @Input() listaClientes?: ICliente[];
  
    clienteBuscado:ICliente = {} as ICliente;
    cpfCliente: string ='';
    dadosEncontrados?:boolean;
 

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
  }

  buscarCliente() : void {
    this.dadosEncontrados = false;
   
      this.service.buscarCliente(this.cpfCliente)
      .pipe(take(1))
      .subscribe((dados) => {
        if(dados){
          this.clienteBuscado = dados;
          debugger;
          this.dadosEncontrados = true;

        }        
      });
    
  }
  

  

    

}
