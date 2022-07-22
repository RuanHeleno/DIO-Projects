import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from './model/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService  {
  private url = "https://localhost:4200/api/bookstore";
  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getBook() {
    return this.httpClient.get(this.url);
  }
}
