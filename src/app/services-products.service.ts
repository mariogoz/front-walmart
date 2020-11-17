import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ServicesProductsService {

  constructor(private http: HttpClient) { }

  getProducts(param) {
    return this.http.get<any>('http://localhost:3000' + `/${param}`, httpOptions)
      .pipe(map(data => {
        return data;
      }));
  }
}
