import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, first, tap } from 'rxjs';
import { Cadastro } from './../interfaces/cadastro';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  // private readonly API = '../../assets/cadastros.json';
  // private readonly API = 'https://betha-v2.onrender.com/api/lista';
  private readonly API = 'http://localhost:8080/api/lista';

  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<Cadastro[]>(this.API).pipe(
      delay(500),
      first() // finalizar a inscriçao
    );
  }

  save(chamado: Partial<Cadastro>) {
    //nao todo o cadastro id nao vem
    return this.httpClient.post<Cadastro>(this.API, chamado).pipe(first());
  }

  update(id: string, chamado: Partial<Cadastro>) {
    return this.httpClient.patch<Cadastro>(this.API, chamado).pipe(first());
  }

  findById(id: string): Observable<Cadastro[]> {
    console.log('iniciando busca por id :' + id);
    const url = `${this.API}/${id}`;
    console.log(`url da requisiçao do id (${id}): ${url}`);

    return this.httpClient.get<Cadastro[]>(url).pipe(
      tap((data) => console.log(`dados recebido com o id (${id}) : ${data}`)),
      catchError((error) => {
        console.log(`Aconteceu esse erro ao buscar id (${id}):  ${error}`);
        throw error;
      })
    );
  }
}
