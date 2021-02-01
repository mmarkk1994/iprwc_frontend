import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {}

  logout() {
    localStorage.removeItem('user');
    this.userService.currentUser = null;
  }

  get currentUser() {
    return this.userService.currentUser;
  }
}
