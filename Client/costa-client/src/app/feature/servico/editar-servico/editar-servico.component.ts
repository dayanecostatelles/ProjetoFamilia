import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicoService } from '../servico.service.component';
import { take } from 'rxjs';
import { IServico } from '../servico.model';


@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent implements OnInit {

public formServico!: FormGroup;

  constructor(private service: ServicoService, private route: ActivatedRoute,
    private router: Router  ) { }

    id:String = '';
    servicoBuscado!: IServico;
 
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   

    this.formServico = new FormGroup({
      idService: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      nomeService: new FormControl(null, [Validators.required]),
      valorServico: new FormControl(null, [Validators.required]),
      tipoServico: new FormControl(null, [Validators.required]),
    });

    this.service.buscarServico(this.id)
      .pipe(take(1))
      .subscribe((dados: IServico) => {
        if(dados){
          this.servicoBuscado = dados;
         console.log(dados); 
        }        
      }); 
  }
   

  salvarServico() : void {
    let servico:IServico = {
      idServico: this.formServico.get('idServico')?.value, 
      nome: this.formServico.get('nomeServico')?.value, 
      valor: this.formServico.get('valorServico')?.value, 
      tipo: this.formServico.get('tipoServico')?.value, 
     
    }

    this.service.editarServico(servico).pipe(take(1)).subscribe(
      () => { 
        alert('Servico salvo com sucesso!')
       this.formServico.reset();
      } );
  }  

  

    

}
