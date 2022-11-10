import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Utils/Context/UserContext';
import './Profile.css'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Profile</title>
            </Helmet>
            <div className='text-center'>
                <img src={user.photoURL} className='dp' alt="" />
            </div>
            <h1 className='text-center text-3xl mt-5 font-bold'>
                {
                    user.displayName ? user.displayName : user.email
                }
            </h1>
        </div>
    );
};

export default Profile;