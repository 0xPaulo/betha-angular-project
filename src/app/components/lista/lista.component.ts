import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { tabelaService } from 'src/app/services/tabela.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FormCadastroComponent } from '../form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cadastros$: Observable<Cadastro[]>;

  displayedColumns = ['_id', 'name', 'defeito', 'ico'];

  constructor(private dialog: MatDialog, private tabelaService: tabelaService) {
    this.cadastros$ = this.carregarTabela();
  }

  carregarTabela(): Observable<Cadastro[]> {
    return (this.cadastros$ = this.tabelaService.carregarCadastros());
  }

  carregarNovaTabela() {
    this.tabelaService.carregarCadastros();
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

  openDialogError() {
    this.dialog.open(ErrorDialogComponent);
  }

  ngOnInit() {
    this.tabelaService.listaAtualizada.subscribe(() => {
      this.carregarTabela();
    });
  }
}
