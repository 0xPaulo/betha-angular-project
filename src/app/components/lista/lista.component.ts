import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { CadastroService } from './../../services/cadastro.service';

import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cadastros$: Observable<Cadastro[]>;
  displayedColumns = ['_id','name', 'defeito'];

  constructor(
    private dialog: MatDialog,
    private cadastroService: CadastroService
  ) {
    this.cadastros$ = this.cadastroService.listarTodos().pipe(
      catchError(() => {
        this.openDialogError();
        return of([]);
      })
    );
  }
  openDialogError() {
    this.dialog.open(ErrorDialogComponent);
  }
  ngOnInit(): void {}
}
