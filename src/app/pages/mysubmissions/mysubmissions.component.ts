import { Component } from '@angular/core';

@Component({
  selector: 'app-mysubmissions',
  templateUrl: './mysubmissions.component.html',
  styleUrl: './mysubmissions.component.css'
})
export class MysubmissionsComponent {

  searchQuery: string = '';

  onSearch() {
    console.log('Recherche effectuée pour : ', this.searchQuery);
    // Ajoutez ici la logique pour effectuer la recherche
  }

}
