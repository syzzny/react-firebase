// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 인증을 위한 getAuth 가져옴
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH,
    projectId: "ex-firebase-b5920",
    storageBucket: "ex-firebase-b5920.appspot.com",
    messagingSenderId: "544329632091",
    appId: "1:544329632091:web:1d90b3ecf72f303e73b27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 사용하고자하는 서비스를 들고와서 사용
// 인증서비스에 관한 내용 가져와서 사용
export const auth = getAuth(app);