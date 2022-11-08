import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerImg'>
            <div className='bannerText text-center lg:w-5/6 w-full mx-auto'>
                <h2 className='xl:text-4xl text-xl font-semibold text-white'>Hello, I am</h2>
                <h1 className='text-white xl:text-9xl lg:text-5xl text-3xl my-4 font-bold'>Peter Parker</h1>
                <p className='text-xl'>
                    A Photographer from New York
                </p>

                <div className='flex mt-10 justify-center'>
                    <button className='btn btn-primary'>View Services</button>
                    <button className='btn btn-ghost'>View Plans</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;