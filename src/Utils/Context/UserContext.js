import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    // get current user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        })
        return unsubscribe;
    }, []);


    const logOut = () => {
        // signOut(auth)
        //     .then(
        //         () => {
        //             setUser({});
        //             <Navigate to='/login' />
        //         }
        //     )
        //     .catch(
        //         err => {
        //             console.error(err)
        //         }
        //     )
    }

    const AuthInfo = {
        createUser,
        user,
        setUser,
        updateUserName,
        logOut,
        loading,
        setLoading,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;