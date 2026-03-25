import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    // createUser
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in User
    const signInUser= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo={
        createUser,
        signInUser
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;