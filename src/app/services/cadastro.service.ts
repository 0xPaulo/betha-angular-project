import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from '../interfaces/cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private httpClient: HttpClient) {}
  listarTodos(): Cadastro[] {
    return [{ _id: '1', name: 'angular', category: 'teste' }];
  }
}
