import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpResponse,
  HttpHandler, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApirestfullService {
  url: string;
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  private httpHeaders2 = new HttpHeaders('multipart/*');


  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:5000/api/v1';
  }

  get(ruta: string) {
    return this.http.get<any>(this.url.concat(ruta));
  }

  post(ruta: string, body: any) {
    return this.http.post<any>(this.url.concat(ruta), body);
  }

  delete(ruta: string) {
    return this.http.delete<any>(this.url.concat(ruta));
  }

  put(ruta: string, body: any) {
    return this.http.put<any>(this.url.concat(ruta), body);
  }
}
