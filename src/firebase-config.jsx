import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDm0ReAnT1d2-BCqNNtKpUgCsTvXa16yG8",
    authDomain: "olx-clone-project-22248.firebaseapp.com",
    projectId: "olx-clone-project-22248",
    storageBucket: "olx-clone-project-22248.appspot.com",
    messagingSenderId: "499469652509",
    appId: "1:499469652509:web:57aeb36eba2a6d18942cf4"
};

// Initialize Firebase and making an instance
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)

export { app, auth, firestore, storage };