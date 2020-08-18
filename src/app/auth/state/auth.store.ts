import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  user: any;
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
}

export function createInitialState(): AuthState {
  return {
		access_token: null,
		token_type: null,
		expires_in: null,
		expires_at: null,
		user: null,
	}
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}