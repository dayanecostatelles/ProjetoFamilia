import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicoService } from '../servico.service.component';
import { take } from 'rxjs';
import { IServico } from '../servico.model';


@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.css']
})
export class AdicionarServicoComponent implements OnInit {

public formServico!: FormGroup;

  constructor(private service: ServicoService) { }

  ngOnInit(): void {
    this.formServico = new FormGroup({
        nomeServico: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        valorServico : new FormControl(null, [Validators.required]),
        tipoServico: new FormControl(null, [Validators.required])
    });
  }

  salvarServico() : void {
    let servico:IServico = {
      nome: this.formServico.get('nomeServico')?.value, 
      valor: this.formServico.get('valorServico')?.value,
      tipo: this.formServico.get('tipoServico')?.value

    }

    this.service.salvarServico(servico).pipe(take(1)).subscribe(
      data => alert("Servico cadastrado com sucesso"),
      error => alert(error.error)
    );
  }  

  

    

}
