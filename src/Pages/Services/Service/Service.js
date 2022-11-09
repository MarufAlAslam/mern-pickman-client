import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, title, imageUrl, price, description, addedBy } = service;
    return (
        <div className='card overflow-hidden bg-gray-800 shadow-xl'>
            <img src={imageUrl} className='service-img' alt="" />
            <div className='card-body'>
                <h2 className='text-xl font-bold text-white'>
                    {title}
                </h2>
                <p>
                    {description.slice(0, 100)}...
                </p>
                <div className='divider m-0'></div>
                <p className='text-info'>
                    <span className='text-white'>Provider: </span>
                    {addedBy}
                </p>
                <div className='divider m-0'></div>
                <div className='card-actions flex justify-between items-center mt-4'>
                    <h3 className='text-2xl font-bold text-white'>
                        ${price}
                    </h3>
                    <Link to={`/service/${_id}`} className='btn btn-primary'>Details <FaArrowAltCircleRight className='ml-2' /></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;