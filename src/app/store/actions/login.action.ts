import { createAction, props } from '@ngrx/store';
import { UserDetails } from '../model/login.model';

export const LoginUser = createAction(
  '[Login] LoginUser',
  props<{ userDetails: UserDetails }>( )
);

export const LogOutUser = createAction('[LogOut] LogOutUser');
