// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZPLXEA6yhWmIdJSrbZtHSWQqusiYM-g",
  authDomain: "drumoffice-5bef6.firebaseapp.com",
  projectId: "drumoffice-5bef6",
  storageBucket: "drumoffice-5bef6.appspot.com",
  messagingSenderId: "809738569173",
  appId: "1:809738569173:web:a7ced90f7ee6f134d7e95c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoreApp () {
  return app
}

console.log('holaaaa')