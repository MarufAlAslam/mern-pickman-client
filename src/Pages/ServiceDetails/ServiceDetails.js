import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>
                    PicMan-Service Details
                </title>
            </Helmet>
            <h2 className='text-4xl text-white font-bold mb-8 text-center'>Service Details</h2>
            <div className='lg:flex block justify-between'>
                <div className='lg:w-1/2 w-full lg:pr-10'>
                    {details.map(
                        detail => {
                            return (
                                <div className='mb-8'>
                                    <h3 className='text-2xl text-white font-bold mb-4'>{detail.title}</h3>
                                    <img src={detail.imageUrl} className='mb-6 w-full' alt="" />
                                    <p className='text-white text-justify'>{detail.description}</p>
                                    <div className='divider'></div>
                                    <p className='text-2xl font-bold'>
                                        <span className='text-white font-bold'>Price: </span>
                                        <span className='text-info'>${detail.price}</span>
                                    </p>
                                    <p>
                                        <span className='text-white font-bold'>Course By: </span>
                                        <span className='text-info'>{detail.addedBy}</span>
                                    </p>
                                </div>
                            )
                        }
                    )}
                </div>


                <div className='lg:w-1/2 w-full lg:pl-10'>
                    <h2 className='text-2xl text-white font-bold mb-8'>Overall Reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;