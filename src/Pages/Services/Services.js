import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const service = useLoaderData()
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>
                    PicMan-Services
                </title>
            </Helmet>

            <h1 className='text-center text-3xl font-bold'>
                All Services
            </h1>

            <div className='grid grid-cols-3 gap-10 mt-6'>
                {
                    service.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;