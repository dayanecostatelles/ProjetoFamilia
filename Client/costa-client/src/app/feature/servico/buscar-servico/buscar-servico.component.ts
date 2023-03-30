import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IServico } from '../servico.model';
import { ServicoService } from '../servico.service.component';


@Component({
  selector: 'app-buscar-servico',
  templateUrl: './buscar-servico.component.html',
  styleUrls: ['./buscar-servico.component.css']
})
export class BuscarServicoComponent implements OnInit {

    @Input() listaServico?: IServico[];
  
    servicoBuscado:IServico = {} as IServico;
    idServico: string ='';
    dadosEncontrados?:boolean;
 

  constructor(private service: ServicoService) { }

  ngOnInit(): void {
  }

  buscarServico() : void {
    this.dadosEncontrados = false;
   
      this.service.buscarServico(this.idServico)
      .pipe(take(1))
      .subscribe((dados) => {
        if(dados){
          this.servicoBuscado = dados;

          this.dadosEncontrados = true;

        }        
      });
    
  }
  

  

    

}
