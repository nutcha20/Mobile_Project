// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth  } from 'firebase/auth';


import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZyd939EMn4aCoroqQvecizoFn9UCGPW0",
  authDomain: "moblie-project-app.firebaseapp.com",
  projectId: "moblie-project-app",
  storageBucket: "moblie-project-app.appspot.com",
  messagingSenderId: "410217969125",
  appId: "1:410217969125:web:3a929916a56071e58b2b0c",
  measurementId: "G-QWPZ055QB8"
};

// Initialize Firebase

// export const auth = getAuth(app);
// export { db, auth }

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(firebase.initializeApp(firebaseConfig));
export {firebase};
