import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cadastros$: Observable<Cadastro[]>;

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

  // onAdd() {
  //   console.log('add');
  //   this.router.navigate(['new'], { relativeTo: this.route });
  // }

  openDialogError() {
    this.dialog.open(ErrorDialogComponent);
  }
}
