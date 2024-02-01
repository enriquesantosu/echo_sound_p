import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concert } from '../models/concerts';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  private url = 'http://localhost:5555/sep/v1';

  constructor(private http: HttpClient) { }

  getNextConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>(`${this.url}/get_next_concerts`);
  }
}
