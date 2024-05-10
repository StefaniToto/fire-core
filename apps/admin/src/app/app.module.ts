import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideAnalytics } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const firebaseConfig = {
  apiKey: 'AIzaSyC3dKiapog-3RYWAEwNq-E3haHZxEGb5_0',
  authDomain: 'capacitor-enappd.firebaseapp.com',
  databaseURL:
    'https://capacitor-enappd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'capacitor-enappd',
  storageBucket: 'capacitor-enappd.appspot.com',
  messagingSenderId: '183533723836',
  appId: '1:183533723836:web:e3cb6c449f21e4d6ca30b9',
  measurementId: 'G-QESX4GCKD3',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
  bootstrap: [AppComponent],
  exports: [RouterModule, AngularFireDatabaseModule, HeaderComponent],
})
export class AppModule {}
