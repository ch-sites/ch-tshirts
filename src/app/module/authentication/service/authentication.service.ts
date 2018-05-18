import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserImpl } from '../../../model';

@Injectable()
export class AuthenticationService {

    user$: Observable<User>;
    currentUser: User;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private angularFirestore: AngularFirestore,
        private router: Router) {

        this.user$ = this.angularFireAuth.authState;

        this.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    get currentUserObservable(): any {
        return this.angularFireAuth.authState
    }

    public googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
        return this.angularFireAuth.auth.signInWithPopup(provider)
        .then((credential) => {
            this.updateUserData(credential.user);
        });
    }

    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`user/${user.uid}`);

        const data: User =  {
            _id: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };

        return userRef.set(data);
    }

    signOut() {
        this.angularFireAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

}
