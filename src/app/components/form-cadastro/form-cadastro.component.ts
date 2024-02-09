import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({ name: [null], defeito: [null] });
  }

  onEnviar() {
    // throw new Error('Method not implemented.');
    console.log('enviar funcionou');
  }
  onCancel() {
    console.log('cancel funcionou');
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {}
}
