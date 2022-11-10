import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Utils/Context/UserContext';

const AddReview = () => {


    const { user } = useContext(AuthContext)
    const [serviceName, setServiceName] = useState('');

    const serviceId = window.location.pathname.replace('/add-review/', '');
    // console.log(serviceId)

    useEffect(() => {
        fetch(`http://localhost:5000/servicebyid/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceName(data.title))
    }, [serviceId])

    // console.log(serviceName)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const review = form.review.value
        const rating = form.rating.value

        const reviewData = {
            reviewBy: user.displayName,
            reviewerEmail: user.email,
            serviceId: serviceId,
            serviceName: serviceName,
            userPhotoUrl: user.photoURL,
            review: review,
            rating: rating,
            reviewDate: new Date().toDateString()
        }

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error(err.message)
            })
        form.reset()
        toast.success('Review Added Successfully')
    }
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Add Review</title>
            </Helmet>
            <h1 className='text-center text-3xl font-bold'>
                Add Review
            </h1>


            <form className='mt-10 lg:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Enter Your Rating (between 1-5)</label>
                    <input required type="number" name="rating" id='title' placeholder='Enter Rating' className='p-3 mt-2 rounded-lg' />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Enter Your Review</label>
                    <textarea required cols="30" className='p-3 mt-2 rounded-lg resize-none' name='review' placeholder='Enter Service Details' rows="5"></textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white px-6 py-3 rounded-lg mt-4'>Add Review</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;