import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';



const firebaseConfig = {
  apiKey: "AIzaSyBXPP67OmhyzJk_g4oSXMzVQuLj5gqDZPg",
  authDomain: "gadget3-0.firebaseapp.com",
  projectId: "gadget3-0",
  storageBucket: "gadget3-0.firebasestorage.app",
  messagingSenderId: "984497351588",
  appId: "1:984497351588:web:41012a8befd72e41e5af31",
  measurementId: "G-RELWP6Z86F"
};


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
