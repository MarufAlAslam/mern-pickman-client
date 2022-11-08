import React from 'react';
import brokenImg from './Broken.svg'
import './Broken.css'
import { Helmet } from 'react-helmet';

const Broken = () => {
    return (
        <div>
            <Helmet>
                <title>PicMan-Not Found</title>
            </Helmet>
            <div className='lg:w-5/6 w-full mx-auto pt-5 pb-16'>
                <img src={brokenImg} className="broken-img" alt="" />
                <div className='text-center'>
                    <h1 className='text-3xl text-white text-center'>ahhha!... Nothing Found</h1>
                    <p>
                        Check the link or Try Again
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Broken;