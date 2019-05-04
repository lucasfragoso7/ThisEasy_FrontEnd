import { API_URL } from './../../assets/environments/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ApiUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {  }
  
  get<T>(ENDPOINT: string): Observable<any>{
    return this.http.get<T>(`${API_URL}${ENDPOINT}`);

  }
  getById<T>(ENDPOINT: string, id:string): Observable<T>{
    return this.http.get<T>(`${API_URL}${ENDPOINT}/${id}`);

  }
  post<T>(ENDPOINT: string, body:any): Observable<any>{
    return this.http.post<T>(`${API_URL}${ENDPOINT}`, body);

  }
  put<T>(ENDPOINT: string, body:any): Observable<any>{
    return this.http.put<T>(`${API_URL}${ENDPOINT}`, body);

  }
  delete<T>(ENDPOINT: string): Observable<any>{
    return this.http.delete<T>(`${API_URL}${ENDPOINT}`);

  }
}
