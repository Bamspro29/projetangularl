import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
// import { SortDialogComponent } from '../sort-dialog/sort-dialog.component';
// import { DialogComponentComponent } from '../dialog-component/dialog-component.component';


@Component({
  selector: 'app-mesforms',
  templateUrl: './mesforms.component.html',
  styleUrl: './mesforms.component.css'
})
export class MesformsComponent {

  @ViewChild('filterButton', { read: ElementRef }) filterButton!: ElementRef;

  isSearching = false;
  isFilterOpen = false;
  isSortMenuOpen = false;
  showDialog = false;

  filters = [
    { icon: 'star', label: 'Favoris', color: 'yellow' },
    { icon: 'star_border', label: 'Sans étoile', color: '' },
    { icon: 'fiber_manual_record', label: 'Réponses non lues', color: 'red' },
    { icon: 'fiber_manual_record_outline', label: 'Sans réponses non lues', color: 'grey' },
    { icon: 'pause_circle_filled', label: 'Désactivé', color: 'grey' },
    { icon: 'play_circle_filled', label: 'Activée', color: 'green' },
    { icon: 'public', label: 'Publique', color: 'green' },
    { icon: 'lock_open', label: 'Non répertorié', color: 'orange' },
    { icon: 'group', label: 'Limité', color: 'blue' },
    { icon: 'lock', label: 'Privé', color: 'black' }
  ];
  liste = [
    {  label: 'Favoris', color: 'yellow' },
    {  label: 'Favoris', color: 'yellow' },
    {  label: 'Favoris', color: 'yellow' },
    {  label: 'Favoris', color: 'yellow' },
    {  label: 'Favoris', color: 'yellow' }
    // { icon: 'star_border', label: 'Sans étoile', color: '' },
    // { icon: 'fiber_manual_record', label: 'Réponses non lues', color: 'red' },
    // { icon: 'fiber_manual_record_outline', label: 'Sans réponses non lues', color: 'grey' },
    // { icon: 'pause_circle_filled', label: 'Désactivé', color: 'grey' },
    // { icon: 'play_circle_filled', label: 'Activée', color: 'green' },
    // { icon: 'public', label: 'Publique', color: 'green' },
    // { icon: 'lock_open', label: 'Non répertorié', color: 'orange' },
    // { icon: 'group', label: 'Limité', color: 'blue' },
    // { icon: 'lock', label: 'Privé', color: 'black' }
  ];

  constructor(public dialog: MatDialog) { }

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleSortMenu() {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  // openDialo() {
  //   const rect = this.filterButton.nativeElement.getBoundingClientRect();
  //   const dialogRef = this.dialog.open(FilterDialogComponent, {
  //     position: {
  //       top: `${rect.bottom + window.scrollY}px`,
  //       left: `${rect.left + window.scrollX}px`
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // openSortDialog() {
  //   const dialogRef = this.dialog.open(SortDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openDialogg(): void {
  //   this.dialog.open(DialogComponentComponent);
  // }

  selectOption(option: string) {
    console.log('Option sélectionnée : ', option);
  }


}
