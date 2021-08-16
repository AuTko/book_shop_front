import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../DTO/login';
import {JwtResponse} from '../DTO/jwtResponse';
import {Register} from '../DTO/register';

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

  login(loginForm: Login): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AUTH_API + 'signin', loginForm,
      httpOptions);
  }

  register(registerForm: Register): Observable<any> {
    return this.http.post(AUTH_API + 'signup', registerForm,
      httpOptions);
  }
}
