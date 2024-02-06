import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/interfaces/Servico';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  servicos: Servico[] = [{ _id: '1', name: 'angular', category: 'teste' }];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.servicos = [];
  }

  ngOnInit(): void {}
}
