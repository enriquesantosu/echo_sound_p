import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:5555/sep/v1'

  constructor(private http: HttpClient) { }

  getUser(userId: String | null): Observable<any> {
    return this.http.get(`${this.url}/get_user/${userId}`)
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.url}/create_user`, user)
  }

  updateUser(user: User, userId: string): Observable<any> {
    return this.http.put(`${this.url}/update_user/${userId}`, user)
  }
}
