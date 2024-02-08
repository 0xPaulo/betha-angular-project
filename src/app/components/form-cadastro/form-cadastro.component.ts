import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css'],
})
export class FormCadastroComponent implements OnInit {
  constructor(private router: Router) {}
  backMain() {
    this.router.navigate(['betha/lista']);
  }
  ngOnInit() {}
}
