import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6b9KPZ7gLv5Gi0elFSozulmuj69r54hg",
    authDomain: "olxproject-2e447.firebaseapp.com",
    projectId: "olxproject-2e447",
    storageBucket: "olxproject-2e447.appspot.com",
    messagingSenderId: "67138967895",
    appId: "1:67138967895:web:42cb40e3be420e29218612",
    measurementId: "G-R29E196VPX"
};

firebase.initializeApp(firebaseConfig);
export default firebase;