import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../user.model';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  user: User;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  editProfile() {
    this.userService.editUser(this.form.value.email, this.form.value.streetAddress,
      this.form.value.postalCode, this.form.value.province)
      .subscribe((response) => {
        console.log(response.message);
        this.route.navigate(['/profile']);
      }, errors => {
        console.log(errors);
      });
  }

}
