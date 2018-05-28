import { Component } from '@angular/core';
import { AuthenticationService } from './module/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ChTshirts';
    currentUser;

    constructor(private authenticationService: AuthenticationService) {
        authenticationService.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    public signOut() {
        this.authenticationService.signOut();
    }
}