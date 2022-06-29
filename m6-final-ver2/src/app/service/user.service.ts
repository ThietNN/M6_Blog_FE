import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Blog} from '../model/blog';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${API_URL}/user`);
  }
  getUserById(id): Observable<User> {
    return this.httpClient.get<User>(`${API_URL}/user/${id}`);
  }
}
