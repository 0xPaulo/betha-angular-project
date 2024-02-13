import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/interfaces/cadastro';
import { RepositoryService } from 'src/app/services/repository.service';
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

  constructor(
    private repository: RepositoryService,
    private dialog: MatDialog,
    private tabelaService: tabelaService
  ) {
    this.cadastros$ = this.carregarTabela();
  }

  carregarTabela(): Observable<Cadastro[]> {
    return (this.cadastros$ = this.tabelaService.carregarCadastros());
  }

  carregarNovaTabela() {
    this.tabelaService.carregarCadastros();
  }

  abrirDialogForm() {
    const dialogRef = this.dialog.open(FormCadastroComponent, {
      // height: '40%',
      width: '80%',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialogError() {
    this.dialog.open(ErrorDialogComponent);
  }

  editarItem(item: Cadastro) {
    const id = item._id;
    const subscription = this.repository
      .findById(id)
      .subscribe((dados: Cadastro[]) => {
        const dialogRef = this.dialog.open(FormCadastroComponent, {
          width: '80%',
          data: { modoEdicao: true, item: dados },
        });
        dialogRef.afterClosed().subscribe((result) => {
          subscription.unsubscribe();
        });
      });
  }

  ngOnInit() {
    this.tabelaService.listaAtualizada.subscribe(() => {
      this.carregarTabela();
    });
  }
}
