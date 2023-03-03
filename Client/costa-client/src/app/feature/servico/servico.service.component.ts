import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServico } from './servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private api: string = 'https://localhost:44315/api/servico';

  constructor(private httpClient: HttpClient) { }

  public salvarServico(servico: IServico): Observable<boolean> {
      return this.httpClient.post<boolean>(`${this.api}`, servico);
  }

  public buscarServico(id: String): Observable<IServico> {
    return this.httpClient.get<IServico>(`${this.api}/`+id);
}
public buscarServicos(): Observable<IServico[]> {
    return this.httpClient.get<IServico[]>(`${this.api}/`);
}
public editarServico(servico: IServico): Observable<boolean> {
  return this.httpClient.put<boolean>(`${this.api}`, servico);
}
public deletarServico(id: string): Observable<IServico> {
  return this.httpClient.delete<IServico>(`${this.api}/`+id);  
}
}