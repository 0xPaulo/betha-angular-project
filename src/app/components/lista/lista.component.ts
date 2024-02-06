import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { CadastroService } from './../../services/cadastro.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cadastros: Cadastro[];
  displayedColumns = ['name', 'category'];

  constructor(private cadastroService: CadastroService) {
    this.cadastros = this.cadastroService.listarTodos();
  }

  ngOnInit(): void {}
}
