import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { CadastroService } from './../../services/cadastro.service';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FormCadastroComponent } from '../form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cadastros$: Observable<Cadastro[]>;
  displayedColumns = ['_id', 'name', 'defeito'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onAdd() {
    console.log('add');
    this.router.navigate(['new'], { relativeTo: this.route });
    // this.router.navigate(['new'], { relativeTo: this.route });
  }

  openFormAdd() {
    const dialogRef = this.dialog.open(FormCadastroComponent, {
      // height: '40%',
      width: '80%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {}
}
