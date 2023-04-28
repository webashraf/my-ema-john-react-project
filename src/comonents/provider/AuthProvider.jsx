import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext(null);



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInEmailPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe;
        }
    }, [])


    // Sign In With Google //
    const googleProvider = new GoogleAuthProvider();
    const signWithGooglePopUp = () =>{
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }



    const authInfo = {
        user,
        createUser,
        signInEmailPassword,
        logOut,
        loading,
        signWithGooglePopUp
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;