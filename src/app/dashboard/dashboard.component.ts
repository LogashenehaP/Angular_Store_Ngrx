import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../store/model/login.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LogOutUser } from '../store/actions/login.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  LoginDetails$: Observable<UserDetails>;
  username: string = '';
  popup = false;
  constructor(
    private store: Store<{ LoginUser: UserDetails; LogOutUser: UserDetails }>,
    private route: Router
  ) {
    this.LoginDetails$ = store.pipe(select('LoginUser'));
    this.store
      .select('LoginUser')
      .subscribe((val) => (this.username = val.username));
  }
  ngOnInit(): void {}
  popUp() {
    this.popup = true;
  }
  cancel() {
    this.popup = false;
  }
  logOut() {
    this.route.navigate(['/']);
    this.store.dispatch(
      LogOutUser()
    );
    this.store.select('LoginUser').subscribe((val) => console.log(val));
  }
}
