import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Utils/Context/UserContext';

const Profile = () => {
    const { user, loading } = useContext(AuthContext)
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Profile</title>
            </Helmet>
            <h1 className='text-center text-5xl font-bold'>
                {
                    loading ? 'Loading...' : user.displayName
                }
            </h1>
        </div>
    );
};

export default Profile;