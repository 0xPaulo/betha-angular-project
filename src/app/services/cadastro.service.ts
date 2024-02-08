import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Cadastro } from '../interfaces/cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  // private readonly API = 'api/lista';
  private readonly API = '../../assets/cadastros.json';

  constructor(private httpClient: HttpClient) {}
  listarTodos() {
    return this.httpClient.get<Cadastro[]>(this.API).pipe(
      delay(1000),
      first(), // finalizar a inscriçao
      tap((cadastro) => console.log(cadastro))
    );
  }
}
