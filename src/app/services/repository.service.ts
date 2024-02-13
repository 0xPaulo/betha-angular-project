import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Cadastro } from '../interfaces/cadastro';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  // private readonly API = '../../assets/cadastros.json';
  // private readonly API = 'https://betha-v2.onrender.com/api/lista';
  private readonly API = 'http://localhost:8080/api/lista ';

  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<Cadastro[]>(this.API).pipe(
      delay(500),
      first() // finalizar a inscriçao
      // tap((cadastro) => console.log(cadastro))
    );
  }

  save(chamado: Partial<Cadastro>) {
    //nao todo o cadastro id nao vem
    return this.httpClient.post<Cadastro>(this.API, chamado).pipe(first());
    console.log(chamado);
  }
}
