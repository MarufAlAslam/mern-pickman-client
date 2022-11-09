import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../../Services/Service/Service';

const TopServices = () => {
    const TopServices = useLoaderData()
    return (
        <div className='lg:w-5/6 w-full py-10 mx-auto'>
            <h1 className='text-center text-4xl text-white font-bold'>
                Latest Services
            </h1>

            <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-6'>
                {
                    TopServices.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

            <div className='text-center mt-10'>
                <Link to='/services' className='btn btn-info px-6 py-2 rounded-full font-bold'>
                    See All Services
                </Link>
            </div>

        </div>
    );
};

export default TopServices;