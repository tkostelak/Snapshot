import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

 //RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

@Injectable()
export class AuthenticationGuard implements CanActivate {
  user: Observable<firebase.User>;
  //Creates an Instance of Firebase User

  constructor(private afAuth: AngularFireAuth, private router: Router ){
    this.user = afAuth.authState;
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.user.map((auth) => {
        if (!auth) {
            this.router.navigateByUrl('/login')
            return false
        }
        return true;
      }).take(1);
    }
}

// take-
    // signature: take(count: number): Observable
    // When you are interested in only the first set number of emission, you want to use take. Maybe you want to see what the user first clicked on when he/she first entered the page, you would want to subscribe to the click event and just take the first emission

// canActivate should return an Observable not a Subscription. If you call .subscribe(), you'll get a Subscription, therefore we use .map().
