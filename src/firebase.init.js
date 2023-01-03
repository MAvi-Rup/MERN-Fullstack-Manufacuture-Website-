// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvdNxSDLUmJkFkm9BdC5qXV6lPWFWquos",
    authDomain: "warhouse-management-system.firebaseapp.com",
    projectId: "warhouse-management-system",
    storageBucket: "warhouse-management-system.appspot.com",
    messagingSenderId: "796851134648",
    appId: "1:796851134648:web:2fb328aa739e48d8a2944d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;