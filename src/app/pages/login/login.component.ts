import { LoginService } from './../../service/login.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;

  user = '';
  pass = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  validate() {
    this.username.nativeElement.value != '' ? this.user = this.username.nativeElement.value : this.user = '';
    this.password.nativeElement.value != '' ? this.pass = this.password.nativeElement.value : this.pass = '';
    console.log(this.user)
    console.log(this.pass)
  }

  loginMethod(event: Event) {
    event.preventDefault();
    console.log('entrar');

    this.loginService.login(this.user, this.pass).subscribe(response => {
      console.log('Dados enviados com sucesso:', response);
      console.error(response.name);
      console.error(response.token);
      console.error(response.userRole);
    }, error => {
      console.error('Erro ao enviar dados:', error);
      console.error(error);
      console.error(error.error);
    });
  }
}
