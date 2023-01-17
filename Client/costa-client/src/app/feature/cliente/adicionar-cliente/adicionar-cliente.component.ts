import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service.component';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';


@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

public formCliente!: FormGroup;

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.formCliente = new FormGroup({
        cpfCliente: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
        nomeCliente: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        dataCliente: new FormControl(null, [Validators.required])
    });
  }

  salvarCliente() : void {
    let cliente:ICliente = {
      cpf: this.formCliente.get('cpfCliente')?.value, 
      nome: this.formCliente.get('nomeCliente')?.value, 
      dataNascimento: this.formCliente.get('dataCliente')?.value, 
    }

    this.service.salvarCliente(cliente).pipe(take(1)).subscribe(
      data => alert("Cliente cadastrado com sucesso"),
      error => alert(error.error)
    );
  }  

  

    

}
