// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private apiUrl = 'http://192.168.0.101:8080';

//   constructor(private http: HttpClient) { }

//   login(): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/auth/login`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Isso garante que o serviço seja provido no nível raiz da aplicação
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {login, password});
  }
}