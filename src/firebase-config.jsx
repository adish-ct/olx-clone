import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDm0ReAnT1d2-BCqNNtKpUgCsTvXa16yG8",
    authDomain: "olx-clone-project-22248.firebaseapp.com",
    projectId: "olx-clone-project-22248",
    storageBucket: "olx-clone-project-22248.appspot.com",
    messagingSenderId: "499469652509",
    appId: "1:499469652509:web:57aeb36eba2a6d18942cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// we can use in various components
export const auth = getAuth(app)