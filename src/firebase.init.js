// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKMwiexF8xw5C5Me--GmNxYeQUK_fbiJ8",
    authDomain: "todo-app-f02cd.firebaseapp.com",
    projectId: "todo-app-f02cd",
    storageBucket: "todo-app-f02cd.appspot.com",
    messagingSenderId: "643254239075",
    appId: "1:643254239075:web:0842aba3b5a69031f51d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;