import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email,password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth,email,password);
    };
    
    const signInGoogle = () => {
        return signInWithPopup(auth,provider);
    };

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth,email);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading,
        setLoading,
        signInGoogle,
        forgetPassword 

    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;