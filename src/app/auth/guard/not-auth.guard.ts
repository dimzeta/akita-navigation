import { NavController } from '@ionic/angular';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AuthQuery } from '../state/auth.query';
import { AuthStore } from '../state/auth.store';
import { combineLatest, Observable, of, from } from 'rxjs';
import { selectPersistStateInit } from '@datorama/akita';
import { map, take, delay, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class NotAuthGuard {
	constructor(
		private router: Router,
		private authQuery: AuthQuery,
    ) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		// return of(true).pipe(delay(10000), take(1))

		return combineLatest(
			this.authQuery.isLoggedIn$,
			selectPersistStateInit(),
		).pipe(
			delay(1500),
			tap(data => console.log('------------- NOT AUTH GUARD -------------', data)),
            map(() => [true, null]),
            map(([isAuth]) => {
                if(!isAuth) return true
                return this.redirect()
            }),
			take(1),
		)
	}

	private redirect() {
		console.log('------------ REDIRECT -----------------');
		return this.router.parseUrl('/tabs/tab1')
	}
}
