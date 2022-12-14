import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const serviceId = window.location.pathname.split('/')[2];


    useEffect(() => {
        fetch(`https://picman-server.vercel.app/reviews/${serviceId}`)
            .then(res => res.json())
            .then(data =>
                setReviews(data.reverse())
            )
    }, [serviceId])


    // console.log(props)
    return (
        <div>
            <div className="flex flex-col justify-between items-center">
                {
                    reviews.length === 0 ? (
                        <h1 className='text-4xl font-bold text-white'>No Reviews Yet</h1>
                    )
                        :
                        (
                            reviews.map(review => {
                                return (
                                    <div className="grid grid-cols-1 gap-4 w-full" key={review._id}>
                                        <div className='card bg-gray-800 shadow w-full mb-4'>
                                            <div className='card-body mob-p'>
                                                <div className='flex justify-between'>
                                                    <div className='lg:w-1/4 w-1/6'>
                                                        <img src={review.userPhotoUrl} alt="" className='reviewer' />
                                                    </div>
                                                    <div className='lg:w-3/4 w-5/6'>
                                                        <h3 className='text-white font-bold'>{review.reviewBy ? review.reviewBy : "Unknown"}</h3>
                                                        <p className='flex items-center'>
                                                            <FaStar className='text-yellow-400 mr-1' /> {review.rating}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='divider'></div>
                                                <p className='text-white'>{review.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                }
            </div>
        </div>
    );
};

export default Reviews;