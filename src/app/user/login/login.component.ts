import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.form.value.username, this.form.value.password)
      .subscribe((response) => {
        const user = response.content as User;
        console.log(response.message);
        localStorage.setItem('user', JSON.stringify(user));
        this.userService.currentUser = user;
        this.route.navigate(['/']);
      }, errors => {
        console.log(errors);
      });
  }
}
