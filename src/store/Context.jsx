// import { createContext, useState } from "react";
// import { app, auth, firestore } from "../firebase-config";

// export const FirebaseContext = createContext(null)

// export const FirebaseProvider = ({ children }) => {
//     const [firebase] = useState({
//         app: app,
//         auth: auth,
//         firestore: firestore,
//         // Add more Firebase-related values if needed
//     });

//     return (
//         <FirebaseContext.Provider value={{ firebase }}>
//             {children}
//         </FirebaseContext.Provider>
//     );
// };

// export const AuthContext = createContext(null)

// // create state for user and stored in a dictionary for accessing our web applications

// // children is the one of the object of props - default
// const Context = ({ children }) => {
//     const [user, setUser] = useState(null); // Assuming 'user' is a string

//     return (
//         <AuthContext.Provider value={{ user, setUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default Context;

import { createContext, useContext, useState, useEffect } from 'react';
import { app, auth, firestore } from '../firebase-config';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    const [firebaseInstance] = useState({
        app,
        auth,
        firestore,
        // Add more Firebase-related values if needed
    });

    return (
        <FirebaseContext.Provider value={firebaseInstance}>
            {children}
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