import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: FormCadastroComponent },
];

export const ComponentsRoutingRoutes = RouterModule.forChild(routes);
