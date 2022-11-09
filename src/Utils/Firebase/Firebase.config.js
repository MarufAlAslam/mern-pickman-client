// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYuW20ISDtTjsJWrM3-5oyTArpaWZhQAI",
    authDomain: "picman-a11.firebaseapp.com",
    projectId: "picman-a11",
    storageBucket: "picman-a11.appspot.com",
    messagingSenderId: "611430069320",
    appId: "1:611430069320:web:eb99c5c7f9835e8850947d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;