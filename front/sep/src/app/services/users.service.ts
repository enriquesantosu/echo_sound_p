import { Injectable } from '@angular/core';
import { User } from '../models/users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:5555/sep/v1'

  constructor() { }
}
