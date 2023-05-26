// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: "ex-firebase-b5920.firebaseapp.com",
//     projectId: "ex-firebase-b5920",
//     storageBucket: "ex-firebase-b5920.appspot.com",
//     messagingSenderId: "544329632091",
//     appId: "1:544329632091:web:1d90b3ecf72f303e73b27e"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ex-firebase-b5920.firebaseapp.com",
    projectId: "ex-firebase-b5920",
    storageBucket: "ex-firebase-b5920.appspot.com",
    messagingSenderId: "544329632091",
    appId: "1:544329632091:web:1d90b3ecf72f303e73b27e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);