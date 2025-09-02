import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter, withInMemoryScrolling, withRouterConfig, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
const firebaseConfig = {
  apiKey: "AIzaSyBXPP67OmhyzJk_g4oSXMzVQuLj5gqDZPg",
  authDomain: "gadget3-0.firebaseapp.com",
  projectId: "gadget3-0",
  storageBucket: "gadget3-0.firebasestorage.app",
  messagingSenderId: "984497351588",
  appId: "1:984497351588:web:41012a8befd72e41e5af31",
  measurementId: "G-RELWP6Z86F"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
            provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',       // enables #fragment scrolling
        scrollPositionRestoration: 'enabled', // restore scroll when navigating back/forward
        // scrollOffset: [0, 72],            // offset for sticky header
      })
    ),
     [provideAnimations()]


        


    
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // Make sure to update the import statement above as well:
    // import { environment } from '../enviroment/environment.development';
  ]
};
