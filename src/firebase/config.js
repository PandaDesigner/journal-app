// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBb7S4ZbfZqAOdISZ2ZUy1FLNXRYONJuHc',
  authDomain: 'react-curso-98f22.firebaseapp.com',
  projectId: 'react-curso-98f22',
  storageBucket: 'react-curso-98f22.appspot.com',
  messagingSenderId: '200454985565',
  appId: '1:200454985565:web:46523d32bca0c5fe5a3ab4'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
