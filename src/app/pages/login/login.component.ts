import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  login: boolean = false;

  ngOnInit() {
  }

  newUser() {
    this.login = false;
    console.log('criar usuario novo');
  }

  forgetPassword() {
    this.login = false;
    console.log('esqueceu a senha');
  }

  loginMethod() {
    this.login = true;
    console.log('entrar');
  }
}
