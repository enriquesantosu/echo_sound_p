import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url = 'http://localhost:5555/sep/v1'

  constructor(private http: HttpClient) { }

  userLogin(loginData: object): Observable<any> {
    return this.http.post(`${this.url}/user_login`, loginData)
  }
}
