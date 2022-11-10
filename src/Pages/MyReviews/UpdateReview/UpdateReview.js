// import React, { useContext } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import { AuthContext } from '../../../Utils/Context/UserContext';

const UpdateReview = () => {
    // const { user } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(data)


    const [updatedData, setUpdatedData] = useState({})

    // setUpdatedData({ review: data.review, rating: data.rating })
    console.log(updatedData)

    // const id = window.location.pathname.split('/')[2]
    // console.log(data)
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const review = form.review.value
        const rating = form.rating.value

        const reviewData = {
            review: review,
            rating: rating,
        }
        setUpdatedData(reviewData)

        fetch(`https://picman-server.vercel.app/update/${data._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        form.reset()
        toast.success('Review Updated Successfully')
    }
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Update Review</title>
            </Helmet>

            <h1 className='text-center text-3xl font-bold'>
                Updating Review
            </h1>


            <form className='mt-10 lg:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Service Id</label>
                    <textarea cols="30" rows="1" className='p-3 mt-2 rounded-lg resize-none' defaultValue={data._id} readOnly>

                    </textarea>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Enter Your Rating (between 1-5)</label>
                    <textarea cols="30" name="rating" rows="1" defaultValue={updatedData.rating ? updatedData.rating : data.rating} className='p-3 mt-2 rounded-lg resize-none'>

                    </textarea>
                    {/* <input required type="number" name="rating" id='title' placeholder='Enter Rating' className='p-3 mt-2 rounded-lg' /> */}
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Enter Your Review</label>
                    <textarea required cols="30" className='p-3 mt-2 rounded-lg resize-none' defaultValue={updatedData.review ? updatedData.review : data.review} name='review' rows="5">

                    </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white px-6 py-3 rounded-lg mt-4'>Add Review</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateReview;