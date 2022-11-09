import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState('');

    const provider = new GoogleAuthProvider();

    // const navigate = useNavigate()

    const popUpSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser);
                setLoading(false);
            }
        });

        return unsubscribe;
    }, []);


    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.log(error.message);
        });
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
        signIn,
        error,
        setError,
        popUpSignIn
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;