import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.register();
    }
  }

  private register() {
    this.userService.register(this.form.value.username, this.form.value.email, this.form.value.password,
      this.form.value.streetAddress, this.form.value.postalCode, this.form.value.province)
      .subscribe((response) => {
        const user = response.content as User;
        console.log(response.message);
        localStorage.setItem('user', JSON.stringify(user));
        this.userService.currentUser = user;
        this.route.navigate(['/login']);
      }, errors => {
        console.log(errors);
      });
  }
}
