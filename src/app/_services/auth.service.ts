import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../DTO/login';

const AUTH_API = 'http://localhost:8080/api/ver1/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
//zalupa
 /* login(loginForm: Login): Observable<Login> {
    return this.http.post<Login>(AUTH_API + 'signin', loginForm,
      httpOptions);
  }*/

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
        firstName,
        lastName,
        email,
        password
      },
      httpOptions);
  }
}
