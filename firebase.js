import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore' ;
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHVg3LO-4mSHRHYLYzI_VRxkuKs6kpYVE",
    authDomain: "monkeybaat-229fd.firebaseapp.com",
    projectId: "monkeybaat-229fd",
    storageBucket: "monkeybaat-229fd.appspot.com",
    messagingSenderId: "360952696588",
    appId: "1:360952696588:web:a5f5edfd39f5b9211cc329",
    measurementId: "G-TG0WKKD0DW"
  };


  // let app;
  // if(firebase.apps.length === 0) {
  //   const firebaseApp = firebase.initializeApp(firebaseConfig)
  // }
  // else {
  //   app = firebase.app();
  // }

  // const db = app.firestore();
  // const auth = firebase.auth();

  // export {db, auth};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
