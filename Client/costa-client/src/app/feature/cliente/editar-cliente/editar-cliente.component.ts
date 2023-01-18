import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service.component';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

public formCliente!: FormGroup;

  constructor(private service: ClienteService, private route: ActivatedRoute,
    private router: Router  ) { }

    cpf:String = '';
    clienteBuscado!: ICliente;
 
    ngOnInit(): void {
    this.cpf = this.route.snapshot.params['cpf'];
   

    this.formCliente = new FormGroup({
      cpfCliente: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      nomeCliente: new FormControl(null, [Validators.required]),
      dataNascimentoCliente: new FormControl(null, [Validators.required])
    });

    this.service.buscarCliente(this.cpf)
      .pipe(take(1))
      .subscribe((dados) => {
        if(dados){
          this.clienteBuscado = dados;
         console.log(dados); 
        }        
      }); 
  }
   

  salvarCliente() : void {
    let cliente:ICliente = {
      cpf: this.formCliente.get('cpfCliente')?.value, 
      nome: this.formCliente.get('nomeCliente')?.value, 
      dataNascimento: this.formCliente.get('dataNascimentoCliente')?.value, 
     
    }

    this.service.editarCliente(cliente).pipe(take(1)).subscribe(
      () => { 
        alert('Cliente salvo com sucesso!')
       this.formCliente.reset();
      } );
  }  

  

    

}
