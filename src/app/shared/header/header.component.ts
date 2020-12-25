import {Component, OnInit} from '@angular/core';
import {User} from '../../user/user.model';
import {UserService} from '../../user/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
    this.userService.currentUser = null;
  }

  get currentUser() {
    return this.userService.currentUser;
  }
}
