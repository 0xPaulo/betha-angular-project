import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { Cadastro } from '../interfaces/cadastro';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class TabelaService {
  emitListaAtualizada = new EventEmitter<void>();

  constructor(
    private repository: RepositoryService,
    private matDialog: MatDialog
  ) {}

  carregarCadastros(): Observable<Cadastro[]> {
    return this.repository.listarTodos().pipe(
      catchError(() => {
        this.openDialogError();
        return of([]);
      })
    );
  }

  openDialogError() {
    this.matDialog.open(ErrorDialogComponent);
  }
}
