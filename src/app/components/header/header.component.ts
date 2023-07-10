import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVideoDialogComponent } from '../add-video-dialog/add-video-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddVideoDialogComponent, {
      width: '80%',
      disableClose: true
    });
  }
}
