import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private api: string = 'https://localhost:44315/api/clientes';

  constructor(private httpClient: HttpClient) { }

  public salvarCliente(cliente: ICliente): Observable<boolean> {
      return this.httpClient.post<boolean>(`${this.api}`, cliente);
  }

  public buscarCliente(cpf: String): Observable<ICliente> {
    return this.httpClient.get<ICliente>(`${this.api}/`+cpf);
}
public buscarClientes(): Observable<ICliente[]> {
    return this.httpClient.get<ICliente[]>(`${this.api}/`);
}
public editarCliente(cliente: ICliente): Observable<boolean> {
  return this.httpClient.put<boolean>(`${this.api}`, cliente);
}
public deletarCliente(cpf: string): Observable<ICliente> {
  return this.httpClient.delete<ICliente>(`${this.api}/`+cpf);  
}
}