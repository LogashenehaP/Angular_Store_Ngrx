import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoginUser } from '../store/actions/login.action';
import { UserDetails } from '../store/model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginUserName: string = 'Loga';
  LoginPassword: string = '2911';
  newUsername: string = '';
  newPassword: string = '';

  constructor(
    private store: Store<{ LoginUser: UserDetails }>,
    private route: Router
  ) {}

  LogInUser() {
    this.store.dispatch(
      LoginUser({
        userDetails: { username: this.newUsername, password: this.newPassword },
      })
    );
    this.store.select('LoginUser').subscribe((value) => console.log(value));
    if (
      this.newUsername === this.LoginUserName &&
      this.newPassword === this.LoginPassword
    ) {
       this.route.navigate(['/dashboard']);
    }
    this.newUsername = '';
    this.newPassword = '';
  }
  ngOnInit(): void {}
}
