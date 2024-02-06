import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListaComponent } from './lista/lista.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, ListaComponent],
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatIconModule],
})
export class ComponentsModule {}
