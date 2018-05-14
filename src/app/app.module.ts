import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

let firebaseConfig = {
    apiKey: "AIzaSyBnTppV8YvdxSzEU3-FHL7AU_2Y8j2apr4",
    authDomain: "ch-tshirts.firebaseapp.com",
    databaseURL: "https://ch-tshirts.firebaseio.com",
    projectId: "ch-tshirts",
    storageBucket: "ch-tshirts.appspot.com",
    messagingSenderId: "757822013879"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
