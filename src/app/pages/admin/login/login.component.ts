import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router){}

  onLogin(){
    if(this.loginObj.userName == "admin" && this.loginObj.password == "334455"){
      this.router.navigateByUrl('/products')
    } else{
      alert('Wrong Credentials')
    }
  }

}

// standalone true mean which is a independent component where ever we have used in we needs to import that component and after that we can used it
// we have to create login object first