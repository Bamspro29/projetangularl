import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  openNewFolderDialog(): void {
    const dialogRef = this.dialog.open(NewFolderDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New folder name:', result);
        // Logic to handle the creation of the new folder
      }
    });
  }

  openTeamDialog(): void {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '40vw', // Augmenter la largeur ici
      maxWidth: '40vw', // Assurer que la largeur maximale est également définie
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
