import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IServico } from '../servico.model';
import { ServicoService } from '../servico.service.component';


@Component({
  selector: 'app-listar-servico',
  templateUrl: './listar-servico.component.html',
  styleUrls: ['./listar-servico.component.css']
})
export class ListarServicoComponent implements OnInit {

    @Input() listaServicos?: IServico[];
  
    servicosBuscados:IServico[] = [] as IServico[];
    idServico: string ='';
    dadosEncontrados?:boolean;
 

  constructor(private service: ServicoService) { }

  ngOnInit(): void {
    this.buscarServicos();
  }
  public deletar(event:Event, id:any) : void {
    this.service.deletarServico(id).pipe(take(1)).subscribe(
      () => { 
        alert('Servico deletado com sucesso!')
       this.buscarServicos();
      } );

    
  }  
buscarServicos() : void {  
  this.service.buscarServicos()
  .pipe(take(1))
  .subscribe((dados) => {
    if(dados){
      this.servicosBuscados = dados;
      this.dadosEncontrados = true;

    }        
  }); 
}
}