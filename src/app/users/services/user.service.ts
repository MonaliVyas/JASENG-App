import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  create(user: User) {
    let body = JSON.stringify(user);
    return this.httpClient.post('http://localhost:3000', body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  update(userId: number, user: User) {
    let body = JSON.stringify(user);
    return this.httpClient.put('http://localhost:3000/' + userId, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getUsers() {
    return this.httpClient.get('http://localhost:3000');
  }

  getUserById(id: string) {
    return this.httpClient.get('http://localhost:3000/' + id);
  }

  deleteUserById(id: string) {
    return this.httpClient.delete('http://localhost:3000/' + id);
  }
}
