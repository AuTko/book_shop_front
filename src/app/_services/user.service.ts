import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isArray} from 'rxjs/internal-compatibility';
import {BookDTO} from '../DTO/bookDTO';


const API_URL = 'http://localhost:8080/api/ver1/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getCustomerBoard(): Observable<any> {
    return this.http.get(API_URL + 'customer', {responseType: 'text'});
  }

  getOwnerBoard(): Observable<any> {
    return this.http.get(API_URL + 'owner', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getBookList(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(API_URL + 'books');
  }

  getBookListByParameters(bookName: string, author: string, genre: string): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(API_URL + 'books/' + bookName + '/' + author + '/' + genre);
  }
}
