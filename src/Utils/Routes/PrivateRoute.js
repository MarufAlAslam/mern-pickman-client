import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return (
            <div className='flex justify-center flex-col items-center h-screen'>
                <progress className="progress w-56 progress-primary my-20 mx-auto"></progress>
                <h1 className='text-4xl font-bold'>Loading...</h1>
            </div>
        )
    }
    if (user && user.uid) {
        console.log(user)
        return children
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default PrivateRoute;