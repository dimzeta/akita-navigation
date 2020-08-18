import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.access_token))
	user$ = this.select((state) => state.user)

  constructor(protected store: AuthStore) {
    super(store);
  }

	current() {
		return this.getValue();
	}

  isLoggedIn() {
		console.log('auth query:: isLoggedIn', toBoolean(this.current().access_token));
		
		return toBoolean(this.current().access_token);
	}

	user() {
		return this.current().user
	}

}
