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

  register(username: string, email: string, password: string, streetAddress: string, postalCode: string, province: string) {
    const params = new HttpParams()
      .set('username', username)
      .set('email', email)
      .set('password', password)
      .set('streetAddress', streetAddress)
      .set('postalCode', postalCode)
      .set('province', province);
    return this.api.postRequest('users/register', params);
  }

  editUser(email: string, streetAddress: string, postalCode: string, province: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('streetAddress', streetAddress)
      .set('postalCode', postalCode)
      .set('province', province);
    return this.api.putRequest(`users/profile/${this.currentUser.id}/edit`, params);
  }

  setNewAuthToken(authToken: string) {
    this.currentUser.authToken = authToken;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  isUserPresent() {
    return (this.currentUser != null && localStorage.getItem('user') != null);
  }
}
