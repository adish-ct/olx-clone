
import { createContext, useContext, useState, useEffect } from 'react';
import { app, auth, firestore, storage } from '../firebase-config';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    const [firebaseInstance] = useState({
        app,
        auth,
        firestore,
        storage,
    });
    console.log('Firebase instance in context:', firebaseInstance);

    return (
        <FirebaseContext.Provider value={firebaseInstance}>
            {children}
            console.log(firebaseInstance);
        </FirebaseContext.Provider>
    );
};

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Set up any initial authentication check or listeners here if needed
        // For example, you might want to check if the user is already authenticated on app load.
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};