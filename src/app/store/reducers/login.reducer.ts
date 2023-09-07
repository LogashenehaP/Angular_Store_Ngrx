import { LoginUser, LogOutUser } from '../actions/login.action';
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { UserDetails } from '../model/login.model';

const initialState: UserDetails = { username: '', password: '' };

const _LoginReducer = createReducer(
  initialState,
  on(LoginUser, (state, { userDetails }) => (state = userDetails)),
  on(LogOutUser, (state, {}) => initialState)
);

export function LoginReducer(state: UserDetails | undefined, action: any) {
  return _LoginReducer(state, action);
}
