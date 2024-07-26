import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  fullname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Fullname:', this.fullname);
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajoutez ici la logique d'inscription
  }

}
