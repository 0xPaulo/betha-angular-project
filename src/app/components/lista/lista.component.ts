import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FormCadastroComponent } from '../form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input() cadastros: Cadastro[] = [];
  displayedColumns = ['_id', 'name', 'defeito', 'ico'];

  constructor(
    private dialog: MatDialog,
    private cadastroService: CadastroService
  ) {}

  openFormAdd() {
    const dialogRef = this.dialog.open(FormCadastroComponent, {
      // height: '40%',
      width: '80%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.loadCadastros();
    });
  }

  // loadCadastros() {
  //   this.cadastros = this.cadastroService.listarTodos().pipe(
  //     catchError(() => {
  //       this.openDialogError();
  //       return of([]);
  //     })
  //   );
  // }

  openDialogError() {
    this.dialog.open(ErrorDialogComponent);
  }

  ngOnInit(): void {}
}
