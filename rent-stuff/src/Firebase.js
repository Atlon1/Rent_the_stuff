// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJWVOGvnjZHjTesYI89BZ8FdeYnbyHPUs",
    authDomain: "rent-the-stuff-auth.firebaseapp.com",
    projectId: "rent-the-stuff-auth",
    storageBucket: "rent-the-stuff-auth.appspot.com",
    messagingSenderId: "300083311461",
    appId: "1:300083311461:web:20ad87d92ade7d2d68e78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth};
export {db};