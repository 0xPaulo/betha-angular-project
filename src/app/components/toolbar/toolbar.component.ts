import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'betha-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  errorMessage: string =
    'Ops! Esta funcionalidade ainda não está disponível. Estamos trabalhando nisso.';
  constructor(private router: Router) {}
  onLogin() {
    this.router.navigate(['login']);
  }
}
