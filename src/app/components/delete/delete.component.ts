import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private repository: RepositoryService
  ) {}

  onDelete() {
    const id = this.data.item._id;
    this.repository.delete(id);
  }
}
