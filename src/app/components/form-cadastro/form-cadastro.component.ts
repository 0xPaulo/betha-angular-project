import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {
  form = this.formBuilder.group({ name: [''], defeito: [''] });

  constructor(
    private snackBar: MatSnackBar,
    private service: CadastroService,
    private formBuilder: NonNullableFormBuilder
  ) {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => {
        console.log(result);
        this.onSucess();
      },
      () => {
        this.onError();
      }
    );
  }
  onError() {
    this.snackBar.open('Acorreu um erro', '', { duration: 5000 });
  }
  onSucess() {
    this.snackBar.open('Cadastrado com sucesso', '', { duration: 5000 });
  }
  onCancel() {
    console.log('cancel funcionou');
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
