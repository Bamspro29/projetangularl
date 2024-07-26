import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetlogin',
  templateUrl: './forgetlogin.component.html',
  styleUrl: './forgetlogin.component.css'
})
export class ForgetloginComponent {
  email:string = "";

  onSubmit(){
    console.log("Email: ", this.email);
  }

}
