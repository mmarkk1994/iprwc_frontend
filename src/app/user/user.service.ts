import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import { HttpParams } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;

  constructor(private api: ApiService) {}

  login(username: string, password: string) {
    const params = new HttpParams()
        .set('username', username)
        .set('password', password);
    return this.api.postRequest('users/login', params);
  }

  register(username: string, email: string, password: string) {
    const params = new HttpParams()
      .set('username', username)
      .set('email', email)
      .set('password', password);
    return this.api.postRequest('users/register', params);
  }

  setNewAuthToken(authToken: string) {
    this.currentUser.authToken = authToken;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  isUserPresent() {
    return (this.currentUser != null && localStorage.getItem('user') != null);
  }
}
